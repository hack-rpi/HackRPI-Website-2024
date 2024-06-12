"use client";

import NavBar from "@/components/nav-bar/nav-bar";
import "@/app/globals.css";
import Footer from "@/components/footer/footer";
import { useEffect, useState } from "react";
import type { Event } from "@/data/schedule";
import { SUNDAY_START, saturdayTimes } from "@/data/schedule";

import { Amplify } from "aws-amplify";
import awsconfig from "@/amplify_outputs.json";
import * as Auth from "aws-amplify/auth";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import HappeningNow from "@/components/schedule/happening-now";
import Schedule from "@/components/schedule/schedule";

Amplify.configure(awsconfig);
const client = generateClient<Schema>({});

export default function Page() {
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	const [saturdayEvents, setSaturdayEvents] = useState<Event[]>([]);
	const [sundayEvents, setSundayEvents] = useState<Event[]>([]);
	const [state, setState] = useState<"loading" | "loaded" | "error">("loading");
	const [happeningNow, setHappeningNow] = useState<Event[]>([]);

	async function fetchEvents(): Promise<Event[]> {
		const session = await Auth.fetchAuthSession();

		let groups = session.tokens?.accessToken.payload["cognito:groups"];

		const { data, errors } = await client.models.event.list({
			authMode: groups ? "userPool" : "identityPool",
			limit: 200,
			filter: {
				visible: { eq: true },
			},
		});

		if (errors) {
			setState("error");
			console.error(errors);
			return [];
		}

		setState("loaded");
		return data.map((event) => event as Event);
	}

	useEffect(() => {
		fetchEvents().then((events) => {
			setSaturdayEvents(events.filter((event) => new Date(event.startTime).getDay() === 6));
			// get all events that start or end on sunday
			let sundayEvents = events.filter(
				(event) => new Date(event.startTime).getDay() === 0 || new Date(event.endTime).getDay() === 0,
			);
			// if the event starts before sunday, set the start time to the start of sunday
			sundayEvents = sundayEvents.map((event) => {
				if (event.startTime < SUNDAY_START) {
					event.startTime = SUNDAY_START;
				}
				return event;
			});
			setHappeningNow(determineHappeningNow(events));
		});

		const interval = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);

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
				<hr className="w-full border-primary border-2 my-4" />
				{state === "loading" && (
					<div className="flex h-fit items-center justify-center w-full">
						<h2 className="text-xl">Loading the schedule: </h2>
						<div className="loading loading-infinity loading-lg text-primary"></div>
					</div>
				)}

				{state === "error" && (
					<div className="badge bg-primary flex items-center justify-center h-fit my-4 ">
						<p className="text-error-content text-xl p-2">
							Oops! Looks like we ran into an issue loading the events. Please check your internet and refresh to try
							again, if the problem persists, please let us know at <a href="mailto:hackrpi@rpi.edu">hackrpi@rpi.edu</a>
							. Thank you!
						</p>
					</div>
				)}

				{state === "loaded" && happeningNow.length > 0 && <HappeningNow events={happeningNow} />}

				{state === "loaded" && (
					<div className="flex flex-col items-start w-full h-fit">
						<h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center">Saturday, November 9, 2024</h1>
						<Schedule events={saturdayEvents} times={saturdayTimes} />
						<div className="h-4"></div>
						<h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center">Sunday, November 10, 2024</h1>
						<Schedule events={sundayEvents} times={saturdayTimes} />
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
