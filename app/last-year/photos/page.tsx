"use client";

import React from "react";
import "@/app/globals.css";
import Footer from "../../../components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import Image from "next/image";

export default function PhotoGallery() {
	return (
		<div className="w-full flex items-center justify-center flex-col">
			<NavBar showOnScroll={false} />
			<h2 className="text-3xl font-bold text-center mb-8 pt-20">A Memorable Time in HackRPI X!</h2>
			<div className="flex items-center justify-center">
				<div className="grid grid-cols-8 gap-5 p-5">
					<div className="col-span-4">
						<Image
							src="/lastYearPhotos/IMG_1115.jpg"
							alt="HackRPI X 2023 Photo"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="col-span-4 grid grid-cols-2 gap-5">
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1118.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1123.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1126.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1127.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
					</div>
					<div className="col-span-2 grid grid-rows-2 gap-5">
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1131.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1135.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
					</div>
					<div className="col-span-4">
						<Image
							src="/lastYearPhotos/IMG_1144.jpg"
							alt="HackRPI X 2023 Photo"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="col-span-2 grid grid-rows-2 gap-5">
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1148.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1151.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
					</div>
					<div className="col-span-4 grid grid-cols-2 gap-5">
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1153.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1157.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1162.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/lastYearPhotos/IMG_1169.jpg"
								alt="HackRPI X 2023 Photo"
								width={500}
								height={500}
							/>
						</div>
					</div>
					<div className="col-span-4">
						<Image
							src="/lastYearPhotos/IMG_1179.jpg"
							alt="HackRPI X 2023 Photo"
							width={1000}
							height={1000}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}