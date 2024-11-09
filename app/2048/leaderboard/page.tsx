"use client";

import { useState } from "react";
import { useEffect } from "react";
import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import "@/app/globals.css";
import HackRPIButton from "@/components/themed-components/hackrpi-button";
import { get_leaderboard, LeaderboardEntry } from "@/app/actions";
import * as Auth from "@aws-amplify/auth";
import { Amplify } from "aws-amplify";
import amplify_outputs from "@/amplify_outputs.json";
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";

Amplify.configure(amplify_outputs);
const client = generateClient<Schema>({ authMode: "userPool" });

export default function Page() {
	const [leaderboardEntries, setLeaderboardEntries] = useState<LeaderboardEntry[]>([]);
	const [isDirector, setIsDirector] = useState(false);

	const fetchLeaderboard = async () => {
		const entries = await get_leaderboard();
		setLeaderboardEntries(entries);
	};

	async function is_director() {
		let groups = undefined;
		try {
			const session = await Auth.fetchAuthSession();
			groups = session.tokens?.accessToken.payload["cognito:groups"];
		} catch (e) {
			console.error(e);
			groups = undefined;
		}

		return groups !== undefined;
	}

	useEffect(() => {
		const setDirectorStatus = async () => {
			setIsDirector(await is_director());
		};

		setDirectorStatus();
		fetchLeaderboard();
	}, []);

	return (
		<div className="flex flex-col items-center justify-start w-full h-screen">
			<NavBar showOnScroll={false}></NavBar>

			<div className="flex-grow flex-shrink basis-auto">
				<h1 className="mt-28 text-center text-4xl">2048 Leaderboard</h1>
				<table className="min-w-[80vw] mt-10 justify-inbetween table-auto w-full table table-zebra">
					<thead>
						<tr>
							<th className="w-1/4 px-4 py-2 text-center">Position</th>
							<th className="w-1/3 px-4 py-2 text-center">Username</th>
							<th className="w-1/3 px-4 py-2 text-center">Score</th>
							{isDirector ? <th className="w-1/3 px-4 py-2">Delete</th> : null}
						</tr>
					</thead>

					<tbody className="text-center">
						{leaderboardEntries.map((entry, index) => (
							<tr key={entry.id}>
								<td className="px-y py-2">{index + 1}</td>
								<td className="px-4 py-2">{entry.username}</td>
								<td className="px-4 py-2">{entry.score}</td>
								{isDirector ? (
									<td className="px-4 py-2 flex items-center justify-center">
										<HackRPIButton
											onClick={async () => {
												await deleteLeaderboardEntry(entry.id);
												await fetchLeaderboard();
											}}
										>
											Delete Item
										</HackRPIButton>
									</td>
								) : null}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex-grow mt-24"></div>

			<div className="absolute-bottom-0 w-full">
				<Footer />
			</div>
		</div>
	);
}

async function deleteLeaderboardEntry(id: string) {
	if (!confirm("Are you sure???")) {
		return;
	}

	const response = await client.models.Leaderboard.delete({ id });

	if (response.errors) {
		alert("Error deleting leaderboard entry");
	}
}
