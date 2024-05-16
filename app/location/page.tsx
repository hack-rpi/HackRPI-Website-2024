"use client";
import React, { useState } from "react";
import DCC from "@/public/maps_img/DCC.png";
import LOW from "@/public/maps_img/LOW.png";
import "@/app/globals.css";
import NextImg from "next/image";
import HackRPIButton from "@/components/themed-components/hackrpi-button";

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
		<div className="flex w-full items-center justify-center flex-col">
			<div>
				<h1 className="title text-5xl py-10"></h1>
			</div>
			<div
				id="maps"
				className="text-center flex items-center justify-center flex-col w-11/12 md:w-2/3  h-[calc(100vh-80px)]"
			>
				<h1 className="font-sans font-bold text-hackrpi-secondary-grey text-7xl ">MAPS</h1>

				<div className="mt-4 mb-8 max-w-[800px]">
					<div className="flex flex-col md:flex-row items-center justify-between w-full md:space-x-4 md:space-y-0 space-y-4 mb-4">
						<HackRPIButton onClick={handleShowDCC} active={showDCC} className="text-xl md:w-[350px] w-full ">
							Darrin Communications Center
						</HackRPIButton>

						<HackRPIButton onClick={handleShowLOW} active={showLOW} className="text-xl md:w-[350px] w-full ">
							Low Center for Industrial Innovation
						</HackRPIButton>
					</div>
					{showDCC && <NextImg src={DCC} alt="DCC Image" className="w-full" />}
					{showLOW && <NextImg src={LOW} alt="LOW Image" className="w-full" />}
				</div>
			</div>
		</div>
	);
};

export default MapsPage;