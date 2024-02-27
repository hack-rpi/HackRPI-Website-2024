import "../app/globals.css";
import NavBar from "@/components/nav-bar/nav-bar";
import TitleComponent from "@/components/title-components/title";

export default function Home() {
	return (
		<div className="h-screen overflow-x-hidden overflow-y-visible">
			<NavBar />
			<TitleComponent />
		</div>
	);
}

// In Next.js, you don't need to manually create a router.
// Each file inside the 'pages' directory becomes a route automatically.
