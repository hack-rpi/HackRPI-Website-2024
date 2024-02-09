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

	return windowWidth > 860 ? <DesktopTitleComponent /> : <MobileTitleComponent />;
}
