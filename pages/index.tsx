import TitleComponent from "@/components/title-components/title";
import FAQPage from "@/components/faq/faq";
import NavBar from "@/components/nav-bar/nav-bar";
import { useEffect, useState } from "react";

export default function Home() {
	const [showNav, setShowNav] = useState(false);

	// Sets the scroll threshold to the viewport height
	var scrollThreshold = 1080;
	const navHeight = 64;

	// Add event listener to the window to update the scrollY state
	useEffect(() => {
		scrollThreshold = window.innerHeight - navHeight;
		const handleScroll = () => {
			setShowNav(window.scrollY > scrollThreshold);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className={`${showNav ? "top-0" : "-top-16"} fixed transition-all w-full z-10`}>
				<NavBar />
			</div>
			<div className="flex flex-col h-fit items-start justify-start w-screen px-8">
				<TitleComponent />
				<FAQPage />
			</div>
		</>
	);
}
