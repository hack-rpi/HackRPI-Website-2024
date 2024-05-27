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

            <div className="justify-center text-center flex w-full items-center flex-col">

				<div className="pt-20">
					<div className="container mx-auto container mx-auto p-4">
						<h1 className="p-2 font-medium text-2xl text-hackrpi-secondary-yellow">LOCATION OF THE EVENT</h1>
						<div className="text-lg">
							
							<strong>📍 Darrin Communications Center</strong> @ Rensselaer Polytechnic Institute
							<br />
							<p>110 8th St, Troy, NY 12180</p>
						</div>
					</div>
				</div>
					
				<MapsPage />

				<div className="container mx-auto p-4">
					<h1 className="p-4 font-medium text-2xl text-hackrpi-secondary-yellow">JUDGING CRITERIA</h1>
					<ul className="text-lg">
						<li><strong>Creativity:</strong> How original is your hack? Is this a novel idea or something that many people have come across?</li>
						<li><strong>Practical & Useful:</strong> What problem do you want to solve? How applicable is your hack to problems we're facing today?</li>
						<li><strong>Technical Difficulty:</strong> How technically challenging is it? Which technologies did you use?</li>
						<li><strong>User Experience:</strong> What impression do you get from the hack? Does it provide for a smooth user experience?</li>
						<li><strong>Future Plans:</strong> Does it have ways it can be improved upon for the future?</li>
					</ul>
				</div>

				<div className="container mx-auto container mx-auto p-4">
					<h1 className="p-4 font-medium text-2xl text-hackrpi-secondary-yellow">PROJECT SUBMISSION</h1>
					<p className="text-lg">Once you have your project ready, Submit your project on Devpost and give a brief presentation at our showcase. You can edit your Devpost submission until the deadline.</p>
				</div>

				<div className="container mx-auto container mx-auto p-4">
					<h1 className="p-4 font-medium text-2xl text-hackrpi-secondary-yellow">MENTORING INFORMATION</h1>
					<p className="text-lg">Mentors will be available throughout the event to provide guidance and assistance to participants. Whether you need help with coding, debugging, or refining your project idea, our experienced mentors are here to support you every step of the way.</p>
				</div>

				<div className="container mx-auto container mx-auto p-4">
					<h1 className="p-4 font-medium text-2xl text-hackrpi-secondary-yellow">EVENT DISCORD</h1>
					<p className="text-lg mb-8">
						Get involved and stay updated! Join our Discord server to access resources, network with others, and receive event announcements: <a href="https://discord.gg/phCzaMr4" className="text-blue-500 hover:underline">Join Discord</a>
					</p>
				</div>

            </div>

			<Footer />
		</>
	);
}

export default EventPage;