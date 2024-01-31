import NavBar from "@/components/nav-bar";
import "../app/globals.css";
import Link from "../components/link";
import SubwayMap from "@/components/desktop-subway-map";

export default function Home() {
	return (
		<div className="">
			<NavBar></NavBar>
			<div className="absolute font-sans">
				
			</div>
			<SubwayMap></SubwayMap>
		</div>
		
	);
}
