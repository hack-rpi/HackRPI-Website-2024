import React, { useState } from "react";
import DCC from "./maps_img/DCC.png";
import LOW from "./maps_img/LOW.png";
import NavBar from "@/components/nav-bar/nav-bar";
import NextImg from "next/image";
import Footer from "@/components/footer/footer";

const MapsPage = () => {
	const [showDCC, setShowDCC] = useState(true);
	const [showLOW, setShowLOW] = useState(false);

	const handleShowDCC = () => {
		setShowDCC(true);
		setShowLOW(false);
	};

	const handleShowLOW = () => {
		setShowDCC(false);
		setShowLOW(true);
	};

	return (
		<div>
			<NavBar showOnScroll={false} />
			<div>
				<h1 className="title text-5xl py-10"></h1>
			</div>
			<div id="about" className="MapsPage text-center mx-auto w-2/3">
				<h1 className="title font-sans-helvetica font-bold text-hackrpi-secondary-grey text-7xl py-6">MAPS</h1>
				<div className="flex flex-row items-center space-x-4">
					<button
						onClick={handleShowDCC}
						className={`bg-hackrpi-secondary-light-blue hover:bg-hackrpi-primary-light-green text-hackrpi-secondary-grey font-bold font-sans-helvetica text-xl py-6 px-24 rounded-full mb-2 ${showDCC ? "bg-hackrpi-primary-dark-green border-hackrpi-secondary-grey border-4" : ""}`}
					>
						Darrin Communications Center
					</button>

					<button
						onClick={handleShowLOW}
						className={`bg-hackrpi-secondary-light-blue hover:bg-hackrpi-primary-light-green text-hackrpi-secondary-grey font-bold font-sans-helvetica text-xl py-6 px-24 rounded-full mb-2 ${showLOW ? "bg-hackrpi-primary-dark-green border-hackrpi-secondary-grey border-4" : ""}`}
					>
						Low Center for Industrial Innovation
					</button>
				</div>

				<div className="maps-container mt-4 mb-8">
					{showDCC && <NextImg src={DCC.src} alt="DCC Image" width={1000} height={1000} style={{ maxWidth: "100%" }} />}
					{showLOW && <NextImg src={LOW.src} alt="LOW Image" width={1000} height={1000} style={{ maxWidth: "100%" }} />}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MapsPage;
