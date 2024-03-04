import NextImg from "next/image";
import { NavBarLinkType } from "@/types/nav-bar-links";
import NavBarLink from "./nav-bar-link";
import logo from "@/public/HackRPI-logo-blue.png";
import RegistrationButton from "./registration-button";

export default function DesktopNavBar({ links }: { links: NavBarLinkType[] }) {
	return (
		<div className="bg-hackrpi-secondary-dark-blue w-full h-24">
			<div className="flex justify-start items-center h-full">
				<div className="w-[12.5%] flex items-center justify-center">
					<NavBarLink href="/">
						<NextImg alt="HackRPI Logo" aria-label="Home Page" src={logo} className="w-14 image-full" />
					</NavBarLink>
				</div>
				<div className="w-1/2">
					{links.map((link) => (
						<NavBarLink key={link.href} href={link.href}>
							{link.children}
						</NavBarLink>
					))}
				</div>
				<div className="w-2/6">
					<RegistrationButton />
				</div>
			</div>
		</div>
	);
}
