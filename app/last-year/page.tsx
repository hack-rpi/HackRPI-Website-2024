"use client";

import React from "react";
import "@/app/globals.css";
import Footer from "../../components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import ProjectDisplay from "@/components/prev-projects/project-display";
import { podiumPrizes, carouselPrizes } from "@/data/previous-prize-winners";
import ProjectCarousel from "@/components/prev-projects/project-carousel";
import HackRPILink from "@/components/themed-components/hackrpi-link";
import Image from "next/image";

export default function PastYearProjects() {
	const topProjects = podiumPrizes.slice(0, 3);

	return (
		<div className="w-full flex items-center justify-center flex-col" id="winners">
			<NavBar showOnScroll={false} />
			<div className="w-11/12 lg:w-3/4 xl:w-2/3 pt-8 flex flex-col items-center justify-center">
				<h2 className="text-3xl font-bold text-center mb-8 pt-20">Previous Projects From HackRPI X</h2>
				<HackRPILink href="/last-year#photos" className="text-2xl px-6 py-2 m-2">
					Jump to Photos
				</HackRPILink>
				<div className="grid grid-cols-1 gap-8 mx-auto">
					{topProjects.map((project, index) => (
						<div key={index}>
							<ProjectDisplay {...project} />
							{index < topProjects.length - 1 && (
								<hr className="my-8 border-t border-gray-200 w-full desktop:w-1/2 mx-auto" />
							)}
						</div>
					))}
				</div>
				<hr className="my-8 border-t border-gray-200 w-full desktop:w-1/2 " />
				<ProjectCarousel projects={carouselPrizes} />
				<hr className="my-8 border-t border-gray-200 w-full desktop:w-1/2 " id="photos" />
				<h2 className="text-3xl font-bold text-center mb-8 pt-24">A Memorable Time in HackRPI X!</h2>
				<div className="flex items-center justify-center">
					<div className="grid grid-cols-8 gap-2 desktop:gap-5 p-5">
						<div className="col-span-4">
							<Image
								src="/lastYearPhotos/IMG_1115.jpg"
								alt="HackRPI X 2023 Photo"
								width={1000}
								height={1000}
							/>
						</div>
						<div className="col-span-4 grid grid-cols-2 gap-2 desktop:gap-5">
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
						<div className="col-span-2 grid grid-rows-2 gap-2 desktop:gap-5">
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
						<div className="col-span-2 grid grid-rows-2 gap-2 desktop:gap-5">
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
						<div className="col-span-4 grid grid-cols-2 gap-2 desktop:gap-5">
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
			</div>
			<Footer />
		</div>
	);
}
