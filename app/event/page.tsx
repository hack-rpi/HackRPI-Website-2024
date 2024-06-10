"use client";

import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import Footer from "../../components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import MapsPage from "../location/page";

function EventPage() {

	const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

	return (
		<>

			<NavBar showOnScroll={false} />

            <div className="justify-center text-center flex w-full items-center flex-col">

				<div className="container mx-auto pt-20 px-4 flex flex-col md:flex-row items-start justify-center">
					
					{/* Left Side - Event Information */}
					<div className="md:w-1/2 p-4">
						
						<h1 className="p-2 font-semibold text-4xl mb-4 text-white">LOCATION</h1>
						
						<br></br>
						<div className="text-2xl mb-10">
						<ul>
							<li><strong>📍 Darrin Communications Center</strong></li>
							<li>Rensselaer Polytechnic Institute</li>
							<p>Address: <a href="https://maps.google.com/?q=Darrin+Communications+Center+51+College+Ave+Troy+NY+12180" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Darrin Communications Center, Troy, NY 12180</a></p>

						</ul>
						
						</div>

						<a
							href="https://www.google.com/maps/place/Darrin+Communications+Center,+Rensselaer+Polytechnic+Institute,+110+8th+St,+Troy,+NY+12180"
							target="_blank"
							rel="noopener noreferrer"
							className="block"
						>
							{/* Embed Google Maps iframe */}
							<div className="w-full h-64 border rounded-lg overflow-hidden">
								<iframe
									width="100%"
									height="100%"
									frameBorder="0"
									style={{ border: 0 }}
									referrerPolicy="no-referrer-when-downgrade"
									src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Darrin+Communications+Center,Rensselaer+Polytechnic+Institute|1102+Sage+Ave,+Troy,+NY+12180&zoom=15`}
									allowFullScreen
								></iframe>
							</div>
						</a>

						<div className="text-2xl mt-10">
							<ul>
								<li><strong>Free Parking</strong></li>
								<p>Parking is available at North Hall Parking Lot, 2-minute walk to Darrin Communications Center</p>
								<p>Parking Address: <a href="https://maps.google.com/?q=North+Lot+Troy+NY+12180" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">North Lot, Troy, NY 12180</a></p>
							</ul>
						</div>
					</div>

					{/* Right Side - Map */}
					<div className="md:w-1/2 p-4">
						<MapsPage />
					</div>
				</div>

				<div className="container mx-auto p-4">
					<h1 className="p-2 font-semibold text-4xl mb-4 text-white">JUDGING CRITERIA</h1>
					<ul className="text-lg">
						<li><strong>Creativity:</strong> How original is your hack? Is this a novel idea or something that many people have come across?</li>
						<li><strong>Practical & Useful:</strong> What problem do you want to solve? How applicable is your hack to problems we're facing today?</li>
						<li><strong>Technical Difficulty:</strong> How technically challenging is it? Which technologies did you use?</li>
						<li><strong>User Experience:</strong> What impression do you get from the hack? Does it provide for a smooth user experience?</li>
						<li><strong>Future Plans:</strong> Does it have ways it can be improved upon for the future?</li>
					</ul>
				</div>

				<div className="container mx-auto container mx-auto p-4">
					<h1 className="p-2 font-semibold text-4xl mb-4 text-white">PROJECT SUBMISSION</h1>
					<p className="text-lg">Once you have your project ready, Submit your project on Devpost and give a brief presentation at our showcase. You can edit your Devpost submission until the deadline.</p>
				</div>

				<div className="container mx-auto container mx-auto p-4">
					<h1 className="p-2 font-semibold text-4xl mb-4 text-white">MENTORING INFORMATION</h1>
					<p className="text-lg">Mentors will be available throughout the event to provide guidance and assistance to participants. Whether you need help with coding, debugging, or refining your project idea, our experienced mentors are here to support you every step of the way.</p>
				</div>

				<div className="container mx-auto container mx-auto p-4">
					<h1 className="p-2 font-semibold text-4xl mb-4 text-white">EVENT DISCORD</h1>
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