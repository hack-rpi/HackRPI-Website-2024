"use client";

import NavBar from "@/components/nav-bar/nav-bar";
import "@/app/globals.css";
import Footer from "@/components/footer/footer";
import { useEffect, useState } from "react";

import { Amplify } from "aws-amplify";
import awsconfig from "@/amplify_outputs.json";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

Amplify.configure(awsconfig);
const client = generateClient<Schema>({});

type Event = {
	id: string;
	title: string;
	description: string;
	startTime: number;
	endTime: number;
	location: string;
	speaker: string;
	visible: true;
};

export default function page() {
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	const [events, setEvents] = useState<Event[]>([]);
	const [state, setState] = useState<"loading" | "loaded" | "error">("loading");
	const [happeningNow, setHappeningNow] = useState<Event[]>([]);

	async function fetchEvents(): Promise<Event[]> {
		let { data, errors } = await client.models.event.list({
			filter: { visible: { eq: true } },
			limit: 100,
			authMode: "identityPool",
		});

		if (!errors && data) {
			setState("loaded");
			return data.map((event) => event as Event);
		}

		// If the user is authenticated and apart of the directors group, they should be able to see all events
		// For some reason, amplify is failing to use the Authenticated IAM role, for directors so we will use the userPool role instead

		({ data, errors } = await client.models.event.list({
			filter: { visible: { eq: true } },
			limit: 100,
			authMode: "userPool",
		}));

		if (!errors && data) {
			setState("loaded");
			return data.map((event) => event as Event);
		}

		setState("error");
		console.error(errors);
		return [];
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);

		fetchEvents().then((events) => {
			setEvents(events);
			setHappeningNow(determineHappeningNow(events));
		});

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col w-screen h-fit min-h-screen items-center justify-center">
			<NavBar showOnScroll={false} />
			<div className="w-11/12 desktop:w-2/3 flex-grow flex-shrink basis-auto mt-28 desktop:mt-16">
				<div className="flex w-full items-center justify-between">
					<h1 className="text-3xl xs:text-4xl font-bold text-center">Schedule</h1>
					<p className="text-center font-bold text-xl  xs:text-3xl">
						{currentDateTime.toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })}
					</p>
				</div>
				{state === "loading" && <p className="text-3xl mb-2">Loading Schedule...</p>}

				{state === "error" && (
					<div className="badge bg-primary flex items-center justify-center h-fit my-4 ">
						<p className="text-error-content text-xl p-2">
							Oops! Looks like we ran into an issue loading the events. Please check your internet and refresh to try
							again, if the problem persists, please let us know at <a href="mailto:hackrpi@rpi.edu">hackrpi@rpi.edu</a>
							. Thank you!
						</p>
					</div>
				)}

				{state === "loaded" && (
					<div>
						{happeningNow.length > 0 && (
							<div>
								<h2>Happening Now!</h2>
								{happeningNow.map((event) => (
									<div key={event.id} className="border-b border-gray-400 h-16 flex justify-start items-center">
										<div></div>
										<div></div>
										<div></div>
									</div>
								))}
							</div>
						)}
						{events.map((event) => (
							<div key={event.id} className="border-b border-gray-400 h-16 flex justify-start items-center">
								<div>{event.title}</div>
							</div>
						))}
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}

function determineHappeningNow(events: Event[]): Event[] {
	const currentDateTime = new Date();
	return events.filter(
		(event) => event.startTime < currentDateTime.getTime() && event.endTime > currentDateTime.getTime(),
	);
}
