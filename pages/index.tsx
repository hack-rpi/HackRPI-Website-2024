import NavBar from "@/components/nav-bar";
import "../app/globals.css";
import Link from "../components/link";
import SubwayMap from "@/components/desktop-subway-map";
import Timer from "@/components/timer";

export default function Home() {
	return (
		<div className="">
			<NavBar></NavBar>
			<div className="absolute  top-[20%] left-0 w-[calc(100vw-450px)] lg:w-[calc(100vw-550px)] font-sans font-bold text-right flex items-end justify-center flex-col">
				<h1 className="md:text-7xl lg:text-8xl xl:text-9xl">
					HackRPI 11
				</h1>
				<h2 className="md:text-5xl lg:text-5xl xl:text-6xl">
					Urban Upgrades
				</h2>
				<p className="md:text-4xl xl:text-5xl"> xx/xx/xx </p>
				<p className="md:text-2xl lg:text-3xl"> Darrin Communications Center, <br /> Rensselaer Polytechnic Institute </p>
			</div>
			<Timer></Timer>
			<SubwayMap></SubwayMap>
		</div>
		
	);
}
