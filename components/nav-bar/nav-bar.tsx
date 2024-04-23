import React, { useEffect, useState } from "react";
import DesktopNavBar from "./nav-bar-desktop";
import MobileNavBar from "./nav-bar-mobile";
import { NavBarLinkType } from "@/types/nav-bar-links";
import MlhBanner from "../mlh-banner/mlh-banner";


export const links: NavBarLinkType[] = [
	{ href: "/", children: "Home" },
	{ href: "/sponsor-us", children: "Sponsor Us" },
	{ href: "/maps", children: "Maps" },
];

export default function NavBar({ showOnScroll }: { showOnScroll: boolean }) {
	const [showNav, setShowNav] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);
	const navHeight = 96;

	// Add event listener to the window to update the scrollY state
	useEffect(() => {
		const scrollThreshold = window.innerHeight - navHeight;
		setWindowWidth(window.innerWidth);
		const handleScroll = () => {
			setShowNav(window.scrollY > scrollThreshold);
		};
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	if (windowWidth < 860)
		return (
			<>
				<MobileNavBar links={links} />
				<MlhBanner />
			</>
		);

	return (
		<>
			<div className={`${showOnScroll ? (showNav ? "top-0" : "-top-24") : "top-0"} fixed transition-all w-full z-10`}>
				<DesktopNavBar links={links} />
				<MlhBanner />
			</div>
		</>
	);
}
