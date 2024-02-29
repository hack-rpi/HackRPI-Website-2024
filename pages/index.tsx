import Footer from "@/components/footer";
import "../app/globals.css";
import NavBar from "@/components/nav-bar/nav-bar";

export default function Home() {
	return (
		<div className="h-screen overflow-x-hidden">
			<NavBar />
			<Footer />
		</div>
	);
}
