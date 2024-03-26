import Footer from "@/components/footer";
import FAQPage from "@/components/faq/faq";
import NavBar from "@/components/nav-bar/nav-bar";
import Head from "next/head";
import TitleComponent from "@/components/title-components/title";
import "../app/globals.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>HackRPI 2024</title>
				<meta
					name="description"
					content="HackRPI is RPI's annual intercollegiate hackathon hosted by students for students. Get swag and free food as you compete for exciting prizes! With a broad range of workshops and mentors on-site, there’s no experience necessary to attend."
				/>
			</Head>
			<div className="flex flex-col items-start desktop:items-center justify-start">
				<NavBar showOnScroll={true} />
				<div className="w-5/6 desktop:w-full pl-8 desktop:px-8">
					<TitleComponent />
					<FAQPage />
				</div>
				<Footer />

				<div className="absolute w-3 top-[500px] desktop:top-[100vh] right-6 2xs:right-8 h-[1500px] desktop:h-[1000px] bg-hackrpi-primary-blue"></div>
				<div
					className={`absolute bg-hackrpi-secondary-dark-blue top-[460px] desktop:top-[100vh] w-12 h-12 rounded-full  border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-0 right-1.5 2xs:right-3.5`}
				></div>
				<div
					className={`absolute bg-hackrpi-secondary-dark-blue top-[1960px] w-12 h-12 rounded-full  border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-0 right-1.5 2xs:right-3.5`}
				></div>
			</div>
		</>
	);
}
