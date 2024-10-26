"use client";

import { useState } from "react";
import { useEffect } from "react";
import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import { Amplify } from "aws-amplify";
import * as Auth from "@aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "@/amplify/data/resource";
// eslint-disable-next-line
// @ts-ignore
import amplify_outputs from "@/amplify_outputs.json";
import { error } from "console";

Amplify.configure(amplify_outputs);
const client = generateClient<Schema>({ authMode: "userPool" });

type LeaderboardEntry = {
    id: string,
    username: string,
    score: number,
    year: number,
}

export default function (){
    const [leaderboardEntries, setLeaderboardEntries] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const entries = await getLeaderboard();
            setLeaderboardEntries(entries);
        };
        
        fetchLeaderboard();
    }, []);

    return (
        <div className="flex flex-col items-start desktop:items-center justify-start w-full h-full">
            <NavBar showOnScroll={false}></NavBar>

            <div className="flex-grow mt-30"></div>
            <div className="flex-grow flex-shrink basis-auto">
                <h1 className="mt-28 text-center text-4xl">2048 Leaderboard</h1>

                <table className="min-w-[80vw] mt-10 justify-inbetween min-w-full table-auto w-full">
                    <thead>
                        <tr>
                            <th className="w-1/3 px-4 py-2 border">Username</th>
                            <th className="w-1/3 px-4 py-2 border">Score</th>
                            <th className="w-1/3 px-4 py-2 border">Year</th>
                        </tr>
                    </thead>

                    <tbody className="text-center">
                        {leaderboardEntries.map((entry) => (
                            <tr key={entry.id}>
                                <td className="px-4 py-2 border">{entry.username}</td>
                                <td className="px-4 py-2 border">{entry.score}</td>
                                <td className="px-4 py-2 border">{entry.year}</td>
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
    )
}

async function getLeaderboard(): Promise<LeaderboardEntry[]> {
    let groups = undefined;
    try {
        const session = await Auth.fetchAuthSession();
        groups = session.tokens?.accessToken.payload["cognito:groups"];
    } catch (e) {
        console.error(e);
        groups = undefined;
    } 

    const {data, errors} = await client.models.Leaderboard.listByScore({
        year: 2024,
    }, {
        limit: 50,
        sortDirection: "DESC",
        authMode: groups ? "userPool" : "identityPool"
    })

    if(errors){
        console.error(errors);
        return [];
    }

    return data.map((entry)=> entry as LeaderboardEntry);
}