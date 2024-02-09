import DesktopNavBar from "@/components/nav-bar/nav-bar-desktop";
import MobileNavBar from "@/components/nav-bar/nav-bar-mobile";
import "../app/globals.css";
import DesktopTitleComponent from "@/components/title-components/desktop-title";
import { useEffect, useState } from "react";
import MobileTitleComponent from "@/components/title-components/mobile-title";

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
		<div className="h-screen overflow-x-hidden overflow-y-visible">
			{/* render desktop nav bar if window width > 860px */}
			{windowWidth > 860 ? (
				<DesktopNavBar />
			) : (
				<MobileNavBar />
			)}

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
