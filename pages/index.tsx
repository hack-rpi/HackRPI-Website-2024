import TitleComponent from "@/components/title-components/title";
import FAQPage from "@/components/faq/faq";
import NavBar from "@/components/nav-bar/nav-bar";
import MlhBanner from "@/components/mlh-banner/mlh-banner";
import { useEffect, useState } from "react";

export default function Home() {
	let faqStart = 0;
	let faqEnd = 0;
	const [highlightFAQ, setHighlightFAQ] = useState(false);

	useEffect(() => {
		faqStart = (document.getElementById("faq")?.offsetTop || window.innerHeight) - 140;
		faqEnd = faqStart + (document.getElementById("faq")?.offsetHeight || window.innerHeight);
		const handleScroll = () => {
			setHighlightFAQ(window.scrollY > faqStart && window.scrollY < faqEnd);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="flex flex-col items-start  desktop:items-center justify-start w-full">
			<MlhBanner />
			<NavBar showOnScroll={true} />
			<div className="w-5/6 desktop:w-full pl-8 desktop:px-8">
				<TitleComponent />
				<FAQPage />
			</div>

			{/* Subway Motif */}
			{/* This code is kinda jank but it works */}
			<div className="absolute w-3 top-[500px] desktop:top-[100vh] right-8 h-[1300px] desktop:h-[1000px] bg-hackrpi-primary-blue"></div>
			<div
				className={`${
					highlightFAQ
						? "fixed top-32 bg-opacity-100"
						: "absolute top-[532px] desktop:top-[calc(100vh+64px)] bg-opacity-0"
				} w-12 h-12 rounded-full bg-white border-[6px] border-hackrpi-primary-blue right-[.9rem]
				transition-colors duration-300`}
			></div>
		</div>
	);
}
