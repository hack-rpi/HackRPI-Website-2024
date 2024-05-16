"use client";

import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import Footer from "../../components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import Head from "next/head";
import MapsPage from "../location/page";

function EventPage() {
	return (
		<>
			<Head>
				<title>HackRPI Information</title>
				<meta
					name="description"
					content="HackRPI is RPI's annual intercollegiate hackathon hosted by students for students. Get swag and free food as you compete for exciting prizes! With a broad range of workshops and mentors on-site, there’s no experience necessary to attend."
				/>
			</Head>

			<NavBar showOnScroll={false} />
            <MapsPage />


			<Footer />
		</>
	);
}

export default EventPage;