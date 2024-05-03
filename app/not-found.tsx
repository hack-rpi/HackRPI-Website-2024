"use client";

import { useState } from "react";
import logo from "@/public/HackRPI-logo-blue.png";
import NextImg from "next/image";
import NavBarLink from "@/components/nav-bar/nav-bar-link";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import "../app/globals.css";

export default function Custom404() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="flex flex-col items-start desktop:items-center justify-start">
			<NavBar showOnScroll={false} />
			<div className="error-message text-center mt-40">
				<h1 className="text-4xl font-bold text-white">ERROR 404: No page found</h1>
				<p>Click Image below to be transported back to the Home Page.</p>
			</div>
			<div className="mt-8 flex justify-center">
				<NavBarLink href="/">
					<NextImg
						alt="HackRPI Logo"
						aria-label="Home Page"
						src={logo}
						className={`w-36 transition duration-300 ease-in-out ${isHovered ? "transform scale-110" : ""}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					/>
				</NavBarLink>
			</div>
			<div className="mt-40"></div>
			<div className="absolute bottom-0 w-full">
				<Footer />
			</div>
		</div>
	);
}
