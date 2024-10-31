"use client";

import "@/app/globals.css";
import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";

export default function page() {
	return (
		<div className="flex flex-col w-full h-fit min-h-screen items-center justify-center">
			<NavBar showOnScroll={false} />
			<div className="flex flex-wrap justify-center gap-12 m-10 pt-10 pb-10 w-11/12">
				<div className="flex flex-col justify-center items-center w-80 xs:w-[400px] md:w-[600px]">
					<h2 id="web-dev" className="text-3xl font-bold text-center mb-8 pt-10">
						Web Development
					</h2>
					<iframe
						src="https://docs.google.com/presentation/d/e/2PACX-1vShAEu5LxeaY_QFG5W509bUy0wCJl2nFq5D8YNqzm0EHBHtcF0Oq_RBndqe4CeaSCl3nSFQ4JVQeImR/embed?start=false&loop=false&delayms=3000"
						className="w-full max-w-[480px] aspect-video"
						allowFullScreen={true}
					></iframe>
				</div>

				<div className="flex flex-col justify-center items-center w-80 xs:w-[400px] md:w-[600px]">
					<h2 id="git" className="text-3xl font-bold text-center mb-8 pt-10">
						Intro to Git and GitHub
					</h2>
					<iframe
						src="https://docs.google.com/presentation/d/e/2PACX-1vR-7FExFdu8CgUiMN8Aqlf7WHFqCVrL1iktSbTUVqPmXKy4YhWXWpywIIPE7O0uKq1H5sPBPyqY6FJw/embed?start=false&loop=false&delayms=3000"
						className="w-full max-w-[480px] aspect-video"
						allowFullScreen={true}
					></iframe>
				</div>

				<div className="flex flex-col justify-center items-center w-80 xs:w-[400px] md:w-[600px]">
					<h2 id="leaflet" className="text-3xl font-bold text-center mb-8 pt-10">
						Mapping Data using Leaflet.js
					</h2>
					<iframe
						src="https://docs.google.com/presentation/d/e/2PACX-1vTslT8Hb4Mm6PPPeArt6oaWmz0gdR7RrCFjXJOsjVN-qjCEIjTmOUmXp8yvbQ74MjZaAgoVDGjIhPfx/embed?start=false&loop=false&delayms=3000"
						className="w-full max-w-[480px] aspect-video"
						allowFullScreen={true}
					></iframe>
				</div>

				<div className="flex flex-col justify-center items-center w-80 xs:w-[400px] md:w-[600px]">
					<h2 id="desktop-dev" className="text-3xl font-bold text-center mb-8 pt-10">
						Desktop Development
					</h2>
					<iframe
						src="https://docs.google.com/presentation/d/e/2PACX-1vTGrDdQJSc49gFt5aOvsn-lcGSVK2qdJhRiO4odTqeMNiNqLhqy1YxG3OMmvd-sZVrWOAJKrbqMhOrP/embed?start=false&loop=false&delayms=3000"
						className="w-full max-w-[480px] aspect-video"
						allowFullScreen={true}
					></iframe>
				</div>

				<div className="flex flex-col justify-center items-center w-80 xs:w-[400px] md:w-[600px]">
					<h2 id="submissions" className="text-3xl font-bold text-center mb-8 pt-10">
						Submitting Your Project
					</h2>
					<iframe
						src="https://docs.google.com/presentation/d/e/2PACX-1vShAEu5LxeaY_QFG5W509bUy0wCJl2nFq5D8YNqzm0EHBHtcF0Oq_RBndqe4CeaSCl3nSFQ4JVQeImR/embed?start=false&loop=false&delayms=3000"
						className="w-full max-w-[480px] aspect-video"
						allowFullScreen={true}
					></iframe>
				</div>
			</div>
			<Footer />
		</div>
	);
}
