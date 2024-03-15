import Footer from "@/components/footer";
import FAQPage from "@/components/faq/faq";
import NavBar from "@/components/nav-bar/nav-bar";
import MlhBanner from "@/components/mlh-banner/mlh-banner";
import Head from "next/head";
import TitleComponent from "@/components/title-components/title";
import "../app/globals.css";
import Link from "../components/link";

export default function Home() {
	return (
		<div>
			<h1 className="font-sans">Home</h1>
			<p>
				Welcome to HackRPI 2024! We are still in the process of building this website, so please check back later for
				more information.
			</p>
			<Link href="/sponsor-us">Sponsor Us</Link>
		</div>
	);
}
