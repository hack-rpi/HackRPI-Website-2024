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
		<div className="p-2 flex flex-col items-center justify-center">
			<div
				id="maps"
				className="text-center flex items-center justify-center flex-col w-11/12 md:w-2/3"
			>
				<h1 className="font-medium text-2xl text-hackrpi-secondary-yellow">MAPS</h1>

				<div className="mt-2 mb-2 max-w-[800px]">
					<div className="flex flex-col md:flex-row items-center justify-between w-full md:space-x-4 md:space-y-0 space-y-4 mb-4">
						<HackRPIButton onClick={handleShowDCC} active={showDCC} className="text-xl md:w-[350px] w-full">
							Darrin Communications Center
						</HackRPIButton>

						<HackRPIButton onClick={handleShowLOW} active={showLOW} className="text-xl md:w-[350px] w-full">
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