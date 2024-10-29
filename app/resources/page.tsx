"use client";

import GoogleSlides from "react-google-slides";

import NavBar from "@/components/nav-bar/nav-bar";
import "@/app/globals.css";
import Footer from "@/components/footer/footer";
import logo from "@/public/HackRPI_Logo_Yellow_Arrow.png";
import Image from "next/image";

export default function page() {
	return (
		<div className="flex flex-col w-full h-fit min-h-screen items-center justify-center">
			<NavBar showOnScroll={false} />
			<div className="flex flex-wrap justify-center gap-12 m-10 pt-10 pb-10">
				<div className="flex flex-col justify-center items-center">
					<h2 id="web-dev" className="text-3xl font-bold text-center mb-8 pt-10">Web Development</h2>
					<GoogleSlides
						width={640}
						height={480}
						slidesLink="https://docs.google.com/presentation/d/1ev4z8gbvVjq_Jh8wBae-ulIzclSElyzKslLN304oeHA/edit?usp=sharing"
						position={1}
						showControls
						loop
					/>
				</div>

				<div className="flex flex-col justify-center items-center">
					<h2 id="mobile-dev" className="text-3xl font-bold text-center mb-8 pt-10">Mobile Development</h2>
					<GoogleSlides
						width={640}
						height={480}
						slidesLink="https://docs.google.com/presentation/d/1pE-DWfhqWjCKAdXuzGSdiv_oHa7MTDD05ZS3qsWBRKU/edit?usp=sharing"
						position={1}
						showControls
						loop
					/>
				</div>

				<div className="flex flex-col justify-center items-center">
					<h2 id="game-dev" className="text-3xl font-bold text-center mb-8 pt-10">Game Development</h2>
					<GoogleSlides
						width={640}
						height={480}
						slidesLink="https://docs.google.com/presentation/d/1WhbCJRoPq63Y-YguBSMBEcSZnTYtZ8D98zsf5h2hCdg/edit?usp=sharing"
						position={1}
						showControls
						loop
					/>
				</div>

				<div className="flex flex-col justify-center items-center">
					<h2 id="cloud" className="text-3xl font-bold text-center mb-8 pt-10">Cloud Development</h2>
					<GoogleSlides
						width={640}
						height={480}
						slidesLink="https://docs.google.com/presentation/d/1-HVKKPet-yn6Ahh7uAX-xqg2Tn6BmCiu0uOIdznt_c8/edit?usp=sharing"
						position={1}
						showControls
						loop
					/>
				</div>
	
				<div className="flex flex-col justify-center items-center">
					<h2 id="submissions" className="text-3xl font-bold text-center mb-8 pt-10">Submitting Your Project</h2>
					<GoogleSlides
						width={640}
						height={480}
						slidesLink="https://docs.google.com/presentation/d/1-xy1srb7m4WPzRnYeKQvtGsBijbHcewqIhexL6Yn2SQ/edit?usp=sharing"
						position={1}
						showControls
						loop
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
