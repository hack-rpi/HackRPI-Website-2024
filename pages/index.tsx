import NavBar from "@/components/nav-bar";
import "../app/globals.css";
import DesktopSubwayMap from "@/components/desktop-subway-map";
import Timer from "@/components/timer";
import MobileSubwayMap from "@/components/mobile-subway-map";
import DesktopTitleComponent from "@/components/desktop-title";
import { useEffect, useState } from "react";
import MobileTitleComponent from "@/components/mobile-title";

export default function Home() {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="h-full">
			<NavBar />

			{/* <Timer /> */}
			{/* render desktop subway map if window width > 860px */}
			{windowWidth > 860 ? (
				<>
					<DesktopTitleComponent />
				</>
			) : (
				<>
					<MobileTitleComponent />
				</>
			)}
		</div>
	);
}
