"use client";

import React from "react";
import "@/app/globals.css";
import Footer from "../../../components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import Image from "next/image";
import image1 from "@/public/lastYearPhotos/IMG_1115.jpg";
import image2 from "@/public/lastYearPhotos/IMG_1118.jpg";
import image3 from "@/public/lastYearPhotos/IMG_1123.jpg";
import image4 from "@/public/lastYearPhotos/IMG_1126.jpg";
import image5 from "@/public/lastYearPhotos/IMG_1127.jpg";
import image6 from "@/public/lastYearPhotos/IMG_1131.jpg";
import image7 from "@/public/lastYearPhotos/IMG_1135.jpg";
import image8 from "@/public/lastYearPhotos/IMG_1144.jpg";
import image9 from "@/public/lastYearPhotos/IMG_1148.jpg";

export default function PhotoGallery() {
	return (
		<div className="w-full flex items-center justify-center flex-col">
			<NavBar showOnScroll={false} />
			<h2 className="text-3xl font-bold text-center mb-8 pt-20">A Memorable Time in HackRPI X!</h2>
			<div className="flex items-center justify-center">
				<div className="grid-cols-4">
					<div className="inline-grid">
						<Image src={image1} width={500} height={500} alt="Photo from HackRPI X 2023" />
					</div>
					<div className="inline-grid">
						<Image src={image2} width={500} height={500} alt="Photo from HackRPI X 2023" />
					</div>
					<div className="inline-grid">
						<Image src={image3} width={500} height={500} alt="Photo from HackRPI X 2023" />
					</div>
					<div className="inline-grid">
						<Image src={image4} width={500} height={500} alt="Photo from HackRPI X 2023" />
					</div>
					<div className="inline-grid">
						<Image src={image5} width={500} height={500} alt="Photo from HackRPI X 2023" />
					</div>
					<div className="inline-grid">
						<Image src={image6} width={500} height={500} alt="Photo from HackRPI X 2023" />
					</div>
					<div className="inline-grid">
						<Image src={image7} width={500} height={500} alt="Photo from HackRPI X 2023" />
					</div>
					<div className="inline-grid">
						<Image src={image8} width={500} height={500} alt="Photo from HackRPI X 2023" />
					</div>
					<div className="inline-grid">
						<Image src={image9} width={500} height={500} alt="Photo from HackRPI X 2023" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
