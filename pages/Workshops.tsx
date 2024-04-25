import React, { useState} from "react";
import "../app/globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import { workshops } from "./../public/workshopInfo";
import Image from "next/image";

interface Workshop {
	title: string;
	time: string;
	location: string;
	speaker: string;
	pic: string;
	description: string;
}


const WorkshopPage = () => {
	const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
	const [showDetail, setShowDetail] = useState<boolean>(false);

	const handleShow = (workshop: Workshop) => {
		setSelectedWorkshop(workshop);
		setShowDetail(false); // Start by hiding the detail view
		setTimeout(() => setShowDetail(true), 100); // Set a delay before showing the detail view
	};

	const handleClose = () => {
		setShowDetail(false);
		setTimeout(() => setSelectedWorkshop(null), 500); // Adjust timing as needed to match transition duration
	};

	return (
		<div className="WorkshopPage">
			<style>{`
                .workshop-container {
                    transition: transform 0.3s ease; /* Original transition */
                    position: relative;
                }

                .workshop-container:hover .bg-overlay {
                    background-color: rgba(34, 34, 34, 0.7); /* Darker background color */
                }

                .bg-overlay {
                    position: absolute;
                    inset: 0;
                    background-color: rgba(34, 34, 34, 0); /* Initial background color */
                    transition: background-color 0.4s ease; /* Background color transition */
                    pointer-events: none;
                    z-index: -1; /* Ensure the overlay is behind the content */
                }

                .image-container {
                    width: 100%;
                    padding-top: 60.25%; /* 16:9 aspect ratio (more rectangular) */
                    position: relative;
                    overflow: hidden;
                }
            `}</style>
			<NavBar showOnScroll={false} />
			<div className="px-6 md:px-10 lg:px-20 xl:px-32">
				<br />
				<br />
				<br />
				<br />
				<br />
				<h1 className="font-helvetica text-white text-6xl mb-10 text-center">Checkout our Workshops!</h1>
				<br />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
					{workshops.map((workshop, index) => (
						<div key={index} className="mb-8 relative">
							<div className="cursor-pointer" onClick={() => handleShow(workshop)}>
								<div className="group relative">
									<div className="workshop-container rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
										<div className="bg-overlay"></div>
										<div className="image-container">
											<Image
												src={workshop.pic}
												alt="workshop"
												layout="fill" // Fill parent container
												objectFit="cover" // Maintain aspect ratio and cover container
												className="rounded-t-lg"
											/>
										</div>
										<div className="bg-transparent p-4 text-center">
											<h2 className="text-white">{workshop.title}</h2>
											<p className="text-sm">
												<span className="text-green-200 font-bold">Time:</span>{" "}
												<span className="text-white">{workshop.time}</span>
											</p>
											<p className="text-sm">
												<span className="text-green-200 font-bold">Location:</span>{" "}
												<span className="text-white">{workshop.location}</span>
											</p>
											<p className="text-sm">
												<span className="text-green-200 font-bold">Speaker:</span>{" "}
												<span className="text-white">{workshop.speaker}</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{selectedWorkshop && (
				<div
					className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity ${showDetail ? "opacity-100" : "opacity-0"}`}
				>
					<div
						className={`bg-gray-800 text-white p-8 rounded-lg transition-opacity duration-500 ${showDetail ? "opacity-100" : "opacity-0"} max-w-md text-center overflow-y-auto`}
					>
						<h2 className="text-2xl font-bold mb-4">{selectedWorkshop.title}</h2>
						<p>
							<strong className="text-green-200 font-bold">Time:</strong>{" "}
							<span className="text-white">{selectedWorkshop.time}</span>
						</p>
						<p>
							<strong className="text-green-200 font-bold">Location:</strong>{" "}
							<span className="text-white">{selectedWorkshop.location}</span>
						</p>
						<p>
							<strong className="text-green-200 font-bold">Speaker:</strong>{" "}
							<span className="text-white">{selectedWorkshop.speaker}</span>
						</p>
						<br />
						<p>{selectedWorkshop.description}</p>
						<button className="bg-red-500 text-white px-4 rounded-t-lg rounded-b-lg py-2 mt-4" onClick={handleClose}>
							Close
						</button>
					</div>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default WorkshopPage;
