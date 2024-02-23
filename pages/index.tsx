import React from "react";
import SponsorPage from '../../HackRPI-Website-2024/components/sponsors';

import "../app/globals.css";
import NavBar from "@/components/nav-bar/nav-bar";
import TitleComponent from "@/components/title-components/title";

export default function Home() {
	return (
		<div className="h-screen overflow-x-hidden overflow-y-visible">
			<NavBar />
			<TitleComponent />
		</div>
	);
}

export default Home;