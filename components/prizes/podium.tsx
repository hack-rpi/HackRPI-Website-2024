import { Prize } from "@/data/prizes";
import { useEffect, useState } from "react";

export default function Podium({ podiumPrizes }: { podiumPrizes: Prize[] }) {
	const [visible, setVisible] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setPrefersReducedMotion(true);
		}
		setVisible(true);
	}, []);

	return (
		<div
			className={`w-11/12 desktop:w-3/4 lg:w-2/3 2xl:w-3/5 ${
				prefersReducedMotion
					? "h-96 xl:h-[500px]"
					: `transition-[height] duration-[1500ms] ${visible ? "h-96 xl:h-[500px]" : "h-0"}`
			} flex justify-around items-end overflow-hidden`}
		>
			
			<div className="w-1/2 mx-2 h-full bg-gradient-to-b from-gold via-yellow-300   to-hackrpi-secondary-dark-blue flex flex-col items-center justify-start">
				<h1 className="text-hackrpi-secondary-dark-blue font-bold font-sans text-3xl xs:text-5xl sm:text-6xl mt-2">
					{podiumPrizes[0].name}
				</h1>
				<h2 className="text-hackrpi-secondary-dark-blue font-bold font-sans text-2xl xs:text-3xl sm:text-5xl mt-2">
					{podiumPrizes[0].amount}
				</h2>
			</div>
			<div className="w-1/2 mx-2 h-3/4 bg-gradient-to-b from-silver via-gray-300  to-hackrpi-secondary-dark-blue flex flex-col items-center justify-start">
				<h1 className="text-hackrpi-secondary-dark-blue font-bold font-sans text-3xl xs:text-5xl sm:text-6xl mt-2">
					{podiumPrizes[1].name}
				</h1>
				<h2 className="text-hackrpi-secondary-dark-blue font-bold font-sans text-2xl xs:text-3xl sm:text-5xl mt-2">
					{podiumPrizes[1].amount}
				</h2>
			</div>
		</div>
	);
}
