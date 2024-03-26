import React from "react";
import Link from "next/link";
import "../app/globals.css";
import Footer from "../components/footer";
import NavBar from "@/components/nav-bar/nav-bar";

function SponsorUsPage() {
	return (
		// main container
		<div className="flex flex-col items-center justify-center min-h-screen text-center w-5/6 mx-auto pt-36">
			<NavBar showOnScroll={false} />
			<div className="flex flex-col items-center mb-8">
				<h3 className="text-5xl font-bold mb-4">SPONSOR US!</h3>
				<Link
					href="https://tinyurl.com/hackrpi-donation"
					className="btn btn-primary rounded-full bg-hackrpi-primary-blue border-none hover:bg-hackrpi-primary-blue-dark px-10 custom-btn-height"
				>
					Donate
				</Link>
			</div>
			<div className="flex justify-center w-full">
				<div className="flex flex-col items-center w-full lg:w-1/2 p-2" style={{ marginRight: "20px" }}>
					<h1 className="text-2xl font-bold mb-4">Want to support?</h1>
					<iframe
						className="w-full h-[60vh] lg:h-[60vh]" // Adjusted height
						src="https://drive.google.com/file/d/17z1LSpUkCeY-AO3tYG5PfMv0U2FngzD_/preview"
						allow="autoplay"
						sandbox="allow-scripts allow-same-origin allow-popups"
					></iframe>
				</div>
				<div className="flex flex-col items-center w-full lg:w-1/2 p-2" style={{ marginLeft: "20px" }}>
					<h3 className="text-2xl font-bold mb-4">Interested in sponsoring?</h3>
					<iframe
						className="w-full h-[60vh] lg:h-[60vh]" // Adjusted height
						src="https://drive.google.com/file/d/17GguOFdq5aU5NuFXnHyLxxsXSzxryHQc/preview"
						allow="autoplay"
						sandbox="allow-scripts allow-same-origin allow-popups"
					></iframe>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default SponsorUsPage;
