import { NavBarLinkType } from "@/types/nav-bar-links";
import Image from "next/image";
import Link from "next/link";
import interactiveMap from "@/public/interactive-navigation/WebInteractiveMap.svg";

const links: NavBarLinkType[] = [
	{ href: "/sponsor-us", children: "Sponsor Us" },
	{ href: "/location", children: "Location" },
	{ href: "/schedule", children: "Schedule" },
	{ href: "/previous-winners", children: "Previous Winners" },
	{ href: "/photo-gallery", children: "Photo Gallery" },
	{ href: "/prizes", children: "Prizes" },
	{ href: "/resources", children: "Resources" },
];

export default function InteractiveNavigationMap() {
	return (
		<div className="relative w-full aspect-square flex items-center justify-center h-fit p-8">
			<Image src={interactiveMap} alt="Map" className="rounded-md w-full" />
			<div className="absolute z-10 flex flex-col text-lg lg:text-xl xl:text-2xl 2xl:text-4xl top-8 lg:top-10 2xl:top-12 left-[18%] lg:left-[16.8%] xl:left-[15.7%] 2xl:left-[15%]">
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="text-white  font-bold flex items-center group mb-2 lg:mb-2.5 xl:mb-5 2xl:mb-6"
					>
						<div className="w-4 xl:w-7 2xl:w-8 aspect-square rounded-full mr-2 xl:mr-4 border-4 xl:border-[6px] border-subway-red bg-[#48566aff] group-hover:bg-white transition-colors duration-300"></div>

						{link.children}
					</Link>
				))}
			</div>
			<SubwayStops />
		</div>
	);
}

function SubwayStops() {
	const subwayStopStyle =
		"absolute w-4 xl:w-7 2xl:w-8 aspect-square rounded-full mr-2 xl:mr-4 border-4 xl:border-[6px] bg-[#48566aff] hover:bg-white transition-colors duration-300";
	return (
		<div className="absolute w-full h-full">
			<div className={`${subwayStopStyle} border-subway-blue top-[30.2%] xl:top-[29%] left-[45%] `}></div>
			<div className={`${subwayStopStyle} border-subway-blue top-[30.2%] xl:top-[29%] left-[30%] `}></div>
			<div className={`${subwayStopStyle} border-subway-blue top-[30.2%] xl:top-[29%] left-[60%] `}></div>
			<div className={`${subwayStopStyle} border-subway-blue top-[30.2%] xl:top-[29%] left-[70.5%] `}></div>
			<div className={`${subwayStopStyle} border-subway-blue top-[30.2%] xl:top-[29%] left-[19%] `}></div>
			<div className={`${subwayStopStyle} border-subway-blue top-[30.2%] xl:top-[76%] left-[64%] `}></div>
			<div className={`${subwayStopStyle} border-subway-purple top-[82%] xl:top-[81.5%] left-[35%] `}></div>
			<div className={`${subwayStopStyle} border-subway-purple top-[82%] xl:top-[81.5%] left-[50%] `}></div>
			<div className={`${subwayStopStyle} border-subway-purple top-[82%] xl:top-[81.5%] left-[64%] `}></div>
			<div className={`${subwayStopStyle} border-subway-purple top-[82%] xl:top-[81.5%] left-[85%] `}></div>
			<div className={`${subwayStopStyle} border-subway-purple top-[90%] xl:top-[90%] left-[8.6%] xl:left-[7%] `}></div>
			<div className={`${subwayStopStyle} border-subway-red top-[30.2%] xl:top-[67%] left-[18%] `}></div>
			<div className={`${subwayStopStyle} border-subway-red top-[30.2%] xl:top-[72.4%] left-[23.5%] `}></div>
			<div className={`${subwayStopStyle} border-subway-red top-[30.2%] xl:top-[78%] left-[29%] `}></div>
			<div className={`${subwayStopStyle} border-subway-yellow top-[30.2%] xl:top-[10%] left-[60%] `}></div>
			<div className={`${subwayStopStyle} border-subway-yellow top-[30.2%] xl:top-[40%] left-[60%] `}></div>
			<div className={`${subwayStopStyle} border-subway-yellow top-[30.2%] xl:top-[52.5%] left-[63.5%] `}></div>
			<div className={`${subwayStopStyle} border-subway-yellow top-[30.2%] xl:top-[65%] left-[67.5%] `}></div>
			<div className={`${subwayStopStyle} border-subway-green top-[30.2%] xl:top-[10%] left-[70.5%] `}></div>
			<div className={`${subwayStopStyle} border-subway-green top-[30.2%] xl:top-[40%] left-[70.5%] `}></div>
			<div className={`${subwayStopStyle} border-subway-green top-[30.2%] xl:top-[52.5%] left-[76.7%] `}></div>
			<div className={`${subwayStopStyle} border-subway-green top-[30.2%] xl:top-[65%] left-[76.7%] `}></div>
			<div className={`${subwayStopStyle} border-subway-green top-[30.2%] xl:top-[81.5%] left-[72%] `}></div>

		</div>
	);
}
