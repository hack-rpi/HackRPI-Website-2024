"use client";

import Footer from "@/components/footer/footer";
import FAQPage from "@/components/faq/faq";
import NavBar from "@/components/nav-bar/nav-bar";
import TitleComponent from "@/components/title-components/title";
import "../app/globals.css";
import AboutSection from "../components/about-us";
import { useEffect, useState } from "react";
import TeamComponent from "@/components/team/team";

export default function Home() {
	const [lineStart, setLineStart] = useState(0);
	const [lineEnd, setLineEnd] = useState(0);
	const [faqStart, setFaqStart] = useState(0);

	useEffect(() => {
		setLineStart(document.getElementById("about")!.offsetTop);
		setLineEnd(document.getElementById("faq")!.offsetTop + document.getElementById("faq")!.offsetHeight);
		setFaqStart(document.getElementById("faq")!.offsetTop);

		const handleResize = () => {
			setLineStart(document.getElementById("about")!.offsetTop);
			setLineEnd(document.getElementById("faq")!.offsetTop + document.getElementById("faq")!.offsetHeight);
			setFaqStart(document.getElementById("faq")!.offsetTop);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleResize);
		};
	}, []);

	return (
		<>
			<div className="flex flex-col items-start desktop:items-center justify-start">
				<NavBar showOnScroll={true} />
				<div className="w-5/6 desktop:w-full pl-8 desktop:px-8">
					<TitleComponent />
					<AboutSection />
					<FAQPage />
					<TeamComponent />
				</div>
				<Footer />

				<div
					className="absolute w-3 right-8	 bg-hackrpi-primary-blue"
					style={{
						top: lineStart + "px",
						height: lineEnd - lineStart + "px",
					}}
				></div>
				<div
					className={`absolute bg-hackrpi-secondary-dark-blue  w-12 h-12 rounded-full  border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-0 right-3.5`}
					style={{
						top: lineStart - 20 + "px",
					}}
				></div>
				<div
					className={`absolute bg-hackrpi-secondary-dark-blue  w-12 h-12 rounded-full  border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-0 right-3.5`}
					style={{
						top: faqStart - 22 + "px",
					}}
				></div>
				<div
					className={`absolute bg-hackrpi-secondary-dark-blue w-12 h-12 rounded-full  border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-0 right-3.5`}
					style={{
						top: lineEnd - 20 + "px",
					}}
				></div>
			</div>
		</>
	);
}
