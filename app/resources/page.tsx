"use client";

import NavBar from "@/components/nav-bar/nav-bar";
import "@/app/globals.css";
import Footer from "@/components/footer/footer";
import logo from "@/public/HackRPI_Logo_Yellow_Arrow.png";
import Image from "next/image";

export default function page() {
	return (
		<div className="flex flex-col w-full h-fit min-h-screen items-center justify-center">
			<NavBar showOnScroll={false} />
			<div className="flex flex-col w-11/12 md:w-1/2 flex-grow flex-shrink basis-auto items-center justify-center text-center desktop:text-left">
				<div className="h-24 desktop:h-16"></div>
				<Image src={logo} alt="HackRPI Logo" width={100} height={100} />
				<h1 className="text-4xl font-bold mb-4">🚧 HackRPI Site Under Development! 🚧</h1>
				<p className="text-xl mb-2">
					Attention all code warriors and caffeine aficionados! Our hackathon hub is currently in the middle of an epic
					upgrade. We&apos;re coding faster than a team of over-caffeinated developers at 3 AM.
				</p>
				<ul className="list-disc w-full list-inside mb-2">
					<li>Challenges so brain-bending, they&apos;ll make your algorithms sweat!</li>
					<li>Prizes so cool, even your keyboard will do a happy dance.</li>
					<li>Resources so valuable, they&apos;ll make Stack Overflow blush.</li>
				</ul>
				<p className="mb-2">
					Stay tuned for the ultimate hackathon experience. In the meantime, feel free to practice your speed coding and
					stock up on energy drinks. This is going to be one heck of a digital showdown.
				</p>
				<p className="w-full mb-2">
					Thanks for your patience! (And for not accidentally deploying anything to production.)
				</p>
			</div>
			<Footer />
		</div>
	);
}
