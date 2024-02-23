import React, { useEffect, useState } from "react";
import DesktopNavBar from "./nav-bar-desktop";
import MobileNavBar from "./nav-bar-mobile";
import { NavBarLinkType } from "@/types/nav-bar-links";

export default function NavBar() {
	const links: NavBarLinkType[] = [{ href: "/sponsor-us", children: "Sponsor Us" }];

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

	return windowWidth > 860 ? <DesktopNavBar links={links} /> : <MobileNavBar links={links} />;
}
