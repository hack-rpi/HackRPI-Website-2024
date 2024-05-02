import { useState, useEffect } from "react";
import RegistrationButton from "@/components/themed-components/registration-link";

export default function TitleText() {
	const [year, setYear] = useState(1824);

	// This kinda works, we may want to add a delay before this starts counting
	// We may also want to make the count ease in and out
	useEffect(() => {
		const startCounting = setTimeout(() => {
			const target = 2024;

			const interval = setInterval(() => {
				setYear((prev) => {
					if (prev < target) return prev + 1;
					else {
						clearInterval(interval);
						return prev;
					}
				});
			}, 10);

			return () => clearInterval(interval);
		}, 700);

		return () => clearTimeout(startCounting);
	}, [year]);

	return (
		<div className="w-full font-sans  text-left flex items-start justify-center flex-col mb-8">
			<h1 className="w-full text-5xl 2xs:text-7xl sm:text-8xl font-bold">HACKRPI</h1>
			<h2 className="w-full text-4xl sm:text-[4rem] whitespace-nowrap h-14">Urban Upgrades</h2>
			<p className={`w-full text-3xl sm:text-4xl mb-8`}>
				November 9-10,{" "}
				<span onMouseEnter={() => setYear(1824)} className={year < 2024 ? "text-[#d6001c]" : "text-base-content"}>
					{year}
				</span>
			</p>
			<RegistrationButton />
		</div>
	);
}
