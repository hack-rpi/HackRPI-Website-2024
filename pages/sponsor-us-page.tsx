import React from "react";
import Link from "next/link";
import "../app/globals.css";
import Footer from "../components/footer";
import NavBar from "@/components/nav-bar/nav-bar";

function SponsorUsPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center w-5/6 mx-auto pt-36">
			<NavBar showOnScroll={false} />
			<div className="text-left w-full">
				<h3 className="text-4xl font-bold mb-4">Last Year...</h3>
			</div>
			<div className="flex flex-col items-center w-full sm:w-1/2 p-2 sm:mr-4 mb-4 sm:mb-0">
				<iframe
					className="w-full aspect-[8.5/11] mx-auto"
					src="https://drive.google.com/file/d/1K4YpXPlna2iuA-qaCtlRENl0_e4c7oM8/preview"
					allow="autoplay"
					sandbox="allow-scripts allow-same-origin allow-popups"
				></iframe>
			</div>

<div className="text-left w-full pt-20">
  <h3 className="text-4xl font-bold mb-4">This year we need your help...</h3>
</div>
<Link
  href="https://tinyurl.com/hackrpi-donation"
  className="btn btn-primary rounded-full bg-hackrpi-primary-blue border-none hover:bg-hackrpi-primary-blue-dark px-6 h-[50px] text-white text-[1.575rem]"
>
  Donate Now!
</Link>
			<div className="flex flex-col sm:flex-row justify-center w-full">
				<div className="flex flex-col items-center w-full sm:w-1/2 p-2 sm:mr-4 mb-4 sm:mb-0">
					<h1 className="text-2xl font-bold mb-4">Individual Donations</h1>
					<iframe
						className="w-full aspect-[8.5/11]"
						src="https://drive.google.com/file/d/1n0A94WUZPzI5g1w46pR1VZ4bSXKOiFsy/preview"
						allow="autoplay"
						sandbox="allow-scripts allow-same-origin allow-popups"
					></iframe>
				</div>
				<div className="flex flex-col items-center w-full sm:w-1/2 p-2 sm:ml-4">
					<h3 className="text-2xl font-bold mb-4">Company Sponsorships</h3>
					<iframe
						className="w-full aspect-[8.5/11]"
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
