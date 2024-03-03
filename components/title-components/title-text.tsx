import { useState, useEffect } from "react";
import RegistrationButton from "./registration-button";

export default function TitleText() {
	const [year, setYear] = useState(1824);

	// This kinda works, we may want to add a delay before this starts counting
	// We may also want to make the count ease in and out
	useEffect(() => {
		const interval = setInterval(() => {
			setYear((prev) => {
				return prev + 1 > 2024 ? 2024 : prev + 1;
			});
		}, 10);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full font-sans  text-left flex items-start justify-center flex-col mb-8">
			<h1 className="w-full text-7xl sm:text-8xl font-bold">HACKRPI</h1>
			<h2 className="w-full text-5xl sm:text-[4rem] mb-4 sm:mb-8 sm:h-20 whitespace-nowrap">Urban Upgrades</h2>
			<p className="w-full text-3xl sm:text-4xl mb-8">
				November 9-10, <span onMouseEnter={() => setYear(1824)}>{year}</span>
			</p>

			<RegistrationButton />
		</div>
	);
}
