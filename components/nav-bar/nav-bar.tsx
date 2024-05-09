import React, { useEffect, useState } from "react";
import DesktopNavBar from "./desktop/nav-bar-desktop";
import MobileNavBar from "./mobile/nav-bar-mobile";
import { NavGroup } from "@/types/nav-bar-links";
import MlhBanner from "../mlh-banner/mlh-banner";

export const links: NavGroup[] = [
	{
		name: "Home",
		links: [
			{ href: "/", children: "Home" },
			{ href: "/#about", children: "About" },
			{ href: "/#faq", children: "FAQ" },
			{href: "/#sponsors", children: "Sponsors"},
			{href: "/#team", children: "Team"},
		],
	},
	{
		name: "Event",
		links: [
			{ href: "/event", children: "Event Info" },
			{href: "/event/schedule", children: "Schedule"},
			{href: "/event/prizes", children: "Prizes"},
			{href: "/event/mentor-queue", children: "Mentor Queue"},
		],
	},
	{
		name: "HackRPI 2023",
		links: [
			{ href: "/last-year#winners", children: "Winners" },
			{ href: "/last-year#photos", children: "Photos" },
		],
	},
	{
		name: "Resources",
		links: [
			{ href: "/resources#getting-started", children: "Getting Started" },
			{ href: "/resources#web-dev", children: "Web Development" },
			{ href: "/resources#mobile-dev", children: "Mobile Development" },
			{ href: "/resources#game-dev", children: "Game Development" },
			{ href: "/resources#cloud", children: "Cloud Computing" },
			{ href: "/resources#submissions", children: "Submitting Your Project" },
		],
	},
	{
		name: "Sponsor Us",
		links: [
			{ href: "/sponsor-us#impact", children: "Impact" },
			{ href: "/sponsor-us#info", children: "Sponsorship Info" },
			{ href: "/sponsor-us#contact", children: "Contact Us" },
		],
	},
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
