import React from "react";
import "@/app/globals.css";
import Footer from "../../../components/footer/footer";

export default function PhotoGallery() {
	return (
		<div className="w-full flex items-center justify-center flex-col">
			{/* TO DO: Add NavBar */}
			<div className="w-11/12 lg:w-3/4 xl:w-2/3 pt-8 flex flex-col items-center justify-center">
				<h2 className="text-3xl font-bold text-center mb-8 pt-20">A Memorable Time in HackRPI X!</h2>

				<div className="grid-cols-3">
					<div className="inline-grid">

					</div>
					<div className="inline-grid">

					</div>
					<div className="inline-grid">

					</div>
					<div className="inline-grid">
                        
					</div>
					<div className="inline-grid">

					</div>
					<div className="inline-grid">

					</div>
					<div className="inline-grid">
                        
					</div>
					<div className="inline-grid">

					</div>
					<div className="inline-grid">

					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}