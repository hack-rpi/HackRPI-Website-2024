import NextImg from "next/image";
import { NavBarLinkType } from "@/types/nav-bar-links";
import NavBarLink from "./nav-bar-link";
import hackrpi_logo from "@/public/HackRPI_Logo_Yellow_Arrow.png";

export default function DesktopNavBar({ links }: { links: NavBarLinkType[] }) {
	return (
		<div className="bg-hackrpi-secondary-yellow w-full h-16" id="home">
			<div className="flex justify-start items-center h-full">
				<NavBarLink href="/">
					<div className="flex justify-around items-center">
						<NextImg alt="HackRPI Logo" src={hackrpi_logo} className="w-14 h-14" />
						<h1 className="text-black text-2xl font-bold ml-2">Home</h1>
					</div>
				</NavBarLink>
				{links.map((link) => (
					<NavBarLink key={link.href} href={link.href}>
						{link.children}
					</NavBarLink>
				))}
			</div>
		</div>
	);
}
