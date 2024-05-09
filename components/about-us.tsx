import { useEffect, useState } from "react";
import RegistrationLink from "./themed-components/registration-link";

function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default function AboutUs() {
	const [aboutTop, setAboutTop] = useState(0);
	const [higlightAbout, setHighlightAbout] = useState(false);

	useEffect(() => {
		// Highlight the about section in the navbar when the user scrolls to it
		let aboutStart = (document.getElementById("about")?.offsetTop || window.innerHeight) - 140;
		let aboutEnd = aboutStart + (document.getElementById("about")?.offsetHeight || window.innerHeight);
		setAboutTop(aboutStart + 140);

		// Update whether the about should be highlighted when the user scrolls
		const handleScroll = () => {
			setHighlightAbout(window.scrollY > aboutStart && window.scrollY < aboutEnd);
			aboutStart = (document.getElementById("about")?.offsetTop || window.innerHeight) - 140;
			aboutEnd = aboutStart + (document.getElementById("about")?.offsetHeight || window.innerHeight);
			setAboutTop(aboutStart + 140);
		};

		// Update the aboutStart and aboutEnd when the user resizes the window
		const handleResize = () => {
			aboutStart = (document.getElementById("about")?.offsetTop || window.innerHeight) - 140;
			aboutEnd = aboutStart + (document.getElementById("about")?.offsetHeight || window.innerHeight);
			setAboutTop(aboutStart + 140);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			id="about"
			className="w-11/12 lg:w-full mx-auto mt-12 mb-8 flex flex-col lg:flex-row items-start justify-start h-fit ml-0"
		>
			<div
				className={`${
					higlightAbout
						? `fixed bg-white ${isMobileDevice() ? "right-9" : "right-3.5"}`
						: "absolute bg-hackrpi-secondary-dark-blue right-3.5"
				} w-12 h-12 rounded-full border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-[5]  `}
				style={{
					top: higlightAbout ? "8rem" : aboutTop - 20 + "px",
				}}
			></div>
			<div className="w-full lg:w-3/6 ml-auto lg:pl-4">
				<h1 className="text-white text-4xl mb-2 font-bold font-sans-Helvetica">About HackRPI</h1>

				<div>
					<>
						<p className="pb-4">
							HackRPI 11 is the 11th annual intercollegiate hackathon hosted by RPI for students not only from RPI but
							also from all around the world. Get swag and free food as you compete for exciting prizes! With a broad
							range of workshops and mentors on-site, there&apos;s no experience necessary to attend. Hackers will also
							have the opportunity to network with our fantastic sponsors from the companies that make our event
							possible. This year&apos;s theme,{" "}
							<span className="font-bold text-hackrpi-primary-light-green">Urban Upgrade</span> is an ode to a decade
							inspiring students and HackRPI!
						</p>
						<p className="pb-4">
							Come join us this November 9-10, 2024 to hack, learn, and meet other people! We are a motivated team of
							RPI students who share a passion for exploring the bounds of Computer Science and a commitment to
							organizing a fantastic event. Our team of students from every grade level works together to plan the
							hackathon and find sponsors to bring the event together.
						</p>
						<p className="pb-4">
							We believe that HackRPI is a vital part of our school. Our goal is to inspire and challenge innovators,
							creators, developers, and entrepreneurs in New York&apos;s Tech Valley and beyond. We help attendees
							develop their skills, explore new technologies, and turn their interests and visions into opportunities.
							Staying true to our slogan &quot;Why Not Code the World?&quot;
						</p>
					</>
				</div>
			</div>

			<div className="w-full lg:w-2/6 flex flex-col items-center lg:items-start mt-4 lg:mt-0 h-full lg:ml-4">
				<div className="w-full lg:w-11/12 bg-hackrpi-secondary-yellow text-black text-xl h-fit overflow-hidden whitespace-nowrap font-bold lg:mt-16 pl-1 ">
					REGISTER NOW! REGISTER NOW! REGISTER NOW! REGISTER NOW! REGISTER NOW! REGISTER NOW! REGISTER NOW!
				</div>
				<div className="w-full lg:w-11/12 bg-gray-900 text-white h-fit flex flex-col items-start justify-start">
					<div className="w-full h-2 bg-white mt-4" />
					<h2 className="flex items-center text-2xl xs:text-4xl font-semibold pl-2 mt-2">
						When &amp; Where{" "}
						<svg
							className="fill-white ml-4 rotate-180 md:rotate-90 lg:rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 11 11"
						>
							<path d="M11 1C11 0.447715 10.5523 -3.74211e-07 10 4.72575e-08L1 -1.63477e-07C0.447715 -1.63477e-07 2.8711e-07 0.447715 2.8711e-07 1C2.8711e-07 1.55228 0.447715 2 1 2L9 2L9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10L11 1ZM1.70711 10.7071L10.7071 1.70711L9.29289 0.292893L0.292893 9.29289L1.70711 10.7071Z" />
						</svg>
					</h2>
					<div className=" w-11/12 flex flex-col md:flex-row lg:flex-col items-start justify-center md:justify-start md:items-center lg:items-start lg:justify-center">
						<div className="pl-2 text-md xs:text-xl mb-4 md:mb-8 lg:mb-4 mt-2 w-1/2 min-w-96 ">
							<p>November 9-10, 2024</p>
							<p>Rensselaer Polytechnic Institute</p>
							<p>Darrin Communications Center</p>
						</div>
						<div className="w-fit pl-2 md:pl-0 lg:pl-2 mb-4 md:mb-0 lg:mb-4">
							<RegistrationLink className="text-xl"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
