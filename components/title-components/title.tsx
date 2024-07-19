"use client";

import { useEffect, useState } from "react";
import DesktopTitleComponent from "./desktop-title";
import MobileTitleComponent from "./mobile-title";

export default function TitleComponent() {
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
	if (windowWidth > 860) return <DesktopTitleComponent />;

	if (windowWidth < 859 && windowWidth > 0) return <MobileTitleComponent />;

	return <div className="h-screen"></div>;
}
