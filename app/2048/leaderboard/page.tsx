"use client";

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
    return (
        <div className="flex flex-col items-start desktop:items-center justify-start w-full h-full">
            <NavBar showOnScroll={false}></NavBar>

            <div className="flex-grow flex-shrink basis-auto">
                
            </div>

            <div className="absolute bottom-0 w-full">
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