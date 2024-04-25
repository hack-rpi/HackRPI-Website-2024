import React, { useState, useEffect, useRef } from "react";
import "../app/globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import Image from "next/image";

interface Workshop {
	title: string;
	time: string;
	location: string;
	speaker: string;
	pic: string;
	description: string;
}

const workshops = [
	{
		title: "Patient Safety 101",
		time: "12-12:30pm",
		location: "DCC 318",
		speaker: "Kathy Rauch",
		pic: "/workshopPics/safety.jpeg",
		description:
			"This workshop is designed for hackers interested in the Patient Safety Tech Prize. It will\
            give you background on patient safety as an urgent issue and will help inspire you to\
            spend your weekend hacking together a project that has the potential to save lives! \
            The team with the best tech-enabled solution will win $1000.",
	},

	{
		title: "Intro to Tech Stacks",
		time: "12:30-1:30pm",
		location: "DCC 308",
		speaker: "Michael Anderson and Konstantin Kuzmin",
		pic: "/workshopPics/techstack.jpeg",
		description: "TBD",
	},

	{
		title: "Intro to MERN Stack Web Dev Workshop",
		time: "1:30-2:30pm",
		location: "DCC 308",
		speaker: "Yash Kaul",
		pic: "/workshopPics/mern.png",
		description:
			"Gain hands-on experience with MongoDB—covering schema validation, client to database connection, and implementing API \
            controllers. Learn about Express: including routing, middleware, and error handling. Utilize React to quickly build \
            interactive applications with state management. Explore Node.js and Npm to manage package dependencies\
             and build/run/test your application easily.  This workshop aims to introduce the basics of MERN applications for use in the\
             hackathon and discuss potential considerations for real world use and deployment.",
	},

	{
		title: "Mobile Dev Workshop",
		time: "1:30-2:30pm",
		location: "DCC 318",
		speaker: "Ryan Hickey",
		pic: "/workshopPics/mobdev.png",
		description:
			"If you've ever wondered how those awesome apps on your phone are made, or if you've got an itch to create something fun and \
          innovative, the Mobile Dev Workshop is the perfect place to start! The main course of our workshop revolves around React and Flutter.  \
          These two powerful frameworks empower you to create fantastic, user-friendly, and visually stunning apps for both IOS and Android at  \
          once. We also will explore Google Firebase, a service that lets you effortlessly manage user data, authentication, and real-time updates.\
          With this software, you can quickly and effectively deploy fully functioning apps with minimal hardships. \
          But what's learning without doing? We've got an exciting coding activity for you! Get ready to roll up your \
          sleeves as you embark on a mini-project to create your mobile app. You'll apply everything you've \
          learned in a fun, hands-on session, and you might come up with the next big app idea!\
          No experience? No problem! This workshop is designed for beginners, and we will\
          be there every step of the way to help you get everything set up.",
	},

	{
		title: "A beginner's Guide to Quantum Computing",
		time: "2:30-3:30pm",
		location: "DCC 308",
		speaker: "Brian Ingmanson",
		pic: "/workshopPics/quantum.png",
		description:
			"How folks can run their first quantum circuit on a real quantum computer, and some of the quirks of quantum computing.",
	},

	{
		title: "Agile Development Workshop",
		time: "3:30-4:30pm",
		location: "DCC 324",
		speaker: "John Sturman",
		pic: "/workshopPics/agile.jpeg",
		description:
			"Join John Sturman for a presentation about agile development and how to work in a development group for maximum productivity.\
          We will explore Scrum and iterative development doing a fun simulation exercise to give you some hands-on experience. \
          This is a good workshop to support you in working in a group creating a project efficiently and effectively.",
	},

	{
		title: "Hacking the machine for fun (and sometimes profit)",
		time: "4:30-5:30pm",
		location: "DCC 318",
		speaker: " Dr. Brian Callahan (w/ Ayah Tharwat )",
		pic: "/workshopPics/hacking.jpeg",
		description:
			"Securing software requires developers to learn how to think like an attacker; you cannot defend against what you cannot\
        imagine going  wrong with your software. There are a wide variety of potential attacks, but \
        learning just a basic few can go a very long way towards improving your coding skills. In this workshop, we will participate in a \
        set of interactive Capture the Flag (CTF) challenges designed to demonstrate some of the \
        ways attackers think. Alongside hacking our machines, we will also learn some secure coding paradigms \
        to protect against these attacks. By the end of the workshop, you will have a newfound appreciation for the importance \
        of secure coding and be armed with the ability to build more secure software.",
	},

	{
		title: "Design Thinking for Technical Innovation",
		time: "4:30-5:30pm",
		location: "DCC 308",
		speaker: "Kylinn Askew",
		pic: "/workshopPics/design.jpeg",
		description:
			"Explore the power of design thinking to drive innovation and foster collaboration to build\
      strong technical products and startups. Learn how to harness creative problem-solving,\
      empathetic user-centric approaches, and cross-functional teamwork to create products\
      that not only meet technical requirements but also exceed user expectations",
	},

	{
		title: "Password Exploitation - FBI Albany",
		time: "5:30-6:30pm",
		location: "DCC 318",
		speaker: "Alex Vargas and Ryan Gallagher",
		pic: "/workshopPics/password.jpeg",
		description:
			"Join the FBI as they explain the math behind password complexity, including tactics for how to attack and\
        break passwords. They will cover steps on how to extract a password hash from a file and run it with \
        hashcat to crack the password. ",
	},

	{
		title: "Semiconductor Industry Overview",
		time: "5:30-6:30pm",
		location: "DCC 324",
		speaker: "Alexander Martin",
		pic: "/workshopPics/semi.jpeg",
		description:
			"Software needs hardware to operate. The last several years has seen a fundamental shift in the\
      Semiconductor Supply Chain. We will provide an overview of the Semiconductor Industry and the role of Global \
      Foundries in that ecosystem.",
	},

	{
		title: "AI made easy with Hugging Face",
		time: "6:30-7:30pm",
		location: "DCC 324",
		speaker: "Raven Levitt",
		pic: "/workshopPics/ai.jpeg",
		description:
			"Have a hack that needs AI but no idea where to start? In this workshop I’ll go over how to use the\
        Hugging Face API to easily leverage thousands of different machine learning models to tackle whatever\
          challenge you’re dealing with, be it text-generation, object detection, or just about any other machine \
        learning challenge, hugging face is a great place to start! After a short presentation we’ll hold a mini \
        competition for the best use of the API, and there just might be prizes…",
	},

	{
		title: "Sticker Workshop with The Forge",
		time: "7:30-8:30",
		location: "Forge",
		speaker: "Mikiel Gica, Saad Mujahid, and Julia Kapchynsky",
		pic: "/workshopPics/forge.png",
		description:
			"The Forge will be open to anyone interested in designing and creating their\
        own contour-cut vinyl stickers. We will be holding a workshop on using free\
        design software to prepare designs for our Roland BN-20A, and \
       afterwards, we will help you print your designs for free! Bringing a laptop\
        and a few images you want to turn into stickers is strongly recommended \
       to be able to follow along and participate.",
	},
];

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
