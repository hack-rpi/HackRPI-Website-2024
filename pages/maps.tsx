import React, { useState } from "react";
import DCC from "./maps_img/DCC.png";
import LOW from "./maps_img/LOW.png";
import NavBar from "@/components/nav-bar/nav-bar";
import Head from "next/head";
import Footer from "@/components/footer";

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
			<Head>
				<title>Maps Page</title>
			</Head>
			<NavBar showOnScroll={true} />
			<div id="about" className="MapsPage text-center mx-auto w-2/3">
				<h1 className="title font-Mokoto text-5xl py-8">MAPS</h1>

				<div className="flex flex-col items-center space-y-8">
					<div className="w-full">
						<button
							onClick={handleShowDCC}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full mb-4"
						>
							Darrin Communications Center
						</button>
					</div>
					{showDCC && <img src={DCC.src} alt="DCC Image" className="img-fluid mx-auto" style={{ maxWidth: "100%" }} />}

					<div className="w-full">
						<button
							onClick={handleShowLOW}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full mb-4"
						>
							Low Center for Industrial Innovation
						</button>
					</div>
					{showLOW && <img src={LOW.src} alt="LOW Image" className="img-fluid mx-auto" style={{ maxWidth: "100%" }} />}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MapsPage;
