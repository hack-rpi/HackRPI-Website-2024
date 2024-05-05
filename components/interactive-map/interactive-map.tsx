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
			<div className="absolute z-10 flex flex-col text-lg lg:text-2xl  xl:text-3xl top-8 lg:top-14 left-[18%] lg:left-[17%] xl:left-[15%]">
				{links.map((link) => (
					<div className="flex items-center group mb-2 lg:mb-2.5 xl:mb-5 2xl:mb-6">
						<div className="w-4 xl:w-8 aspect-square rounded-full mr-2 xl:mr-4 border-4 xl:border-[6px] border-[#ef3a42] bg-[#48566aff] group-hover:bg-white transition-colors duration-300"></div>
						<Link key={link.href} href={link.href} className="text-white  font-bold">
							{link.children}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
