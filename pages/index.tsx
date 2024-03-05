import Footer from "@/components/footer";
import "../app/globals.css";
import NavBar from "@/components/nav-bar/nav-bar";
import TitleComponent from "@/components/title-components/title";
import FAQPage from "@/components/faq/faq";

export default function Home() {
	return (
		<div className="h-screen overflow-x-hidden">
			<NavBar />
			<FAQPage />
			<Footer />
		</div>
	);
}
