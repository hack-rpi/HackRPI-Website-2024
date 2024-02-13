import NextImg from "next/image";
import { NavBarLinkType } from "@/types/nav-bar-links";
import NavBarLink from "./nav-bar-link";

export default function DesktopNavBar({ links }: { links: NavBarLinkType[] }) {
	return (
		<div className="bg-hackrpi-secondary-yellow w-full h-16">
			<div className="flex justify-start items-center h-full">
				<NavBarLink href="/">
					<div className="flex justify-around items-center">
						<NextImg alt="HackRPI Logo" src="/HackRPI_Logo_Outlined.png" className="h-14" height="100" width="100"/>
						<h1 className="text-black text-2xl font-bold ml-2">HackRPI 2024</h1>
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
