import { NavBarLinkType } from "@/types/nav-bar-links";
import { useState, useEffect } from "react";
import NextImg from "next/image";
import hackrpi_logo from "@/public/HackRPI-logo-blue.png";
import NavBarLink from "./nav-bar-link";

export default function MobileNavBar({ links }: { links: NavBarLinkType[] }) {
	const [navMenuOpen, setNavMenuOpen] = useState(false);
	useEffect(() => {
		document.onkeydown = (e) => {
			if (e.key === "Escape") {
				setNavMenuOpen(false);
			}
		};
	}, []);

	return (
		<>
			<div className="w-full h-24 flex items-center justify-center fixed top-0 bg-hackrpi-secondary-dark-blue z-20">
				<div className="flex items-center justify-start w-1/3">
					<button onClick={() => setNavMenuOpen(!navMenuOpen)} className="text-white text-4xl pl-8">
						<NextImg alt="Hamburger Menu" src="/menu-icon.svg" className="w-10 image-full" width={40} height={40} />
					</button>
				</div>
				<div className="flex items-center justify-center w-1/3">
					<NextImg alt="HackRPI Logo" src={hackrpi_logo} className="w-14 image-full" />
				</div>
				<div className="flex items-center justify-center w-1/3"></div>
			</div>
			<div
				className={`fixed top-0 bottom-0 w-full bg-black bg-opacity-40 ${
					navMenuOpen ? "left-0" : "-left-full"
				} z-10 transition-all duration-300`}
				onClick={() => setNavMenuOpen(false)}
			></div>
			<div
				className={`fixed top-24 ${
					navMenuOpen ? "left-0" : "-left-60"
				} h-full bg-hackrpi-secondary-dark-blue w-48 z-10 transition-all`}
			>
				<div className="flex flex-col items-center justify-start h-full">
					{links.map((link) => (
						<NavBarLink key={link.href} href={link.href}>
							{link.children}
						</NavBarLink>
					))}
				</div>
			</div>
		</>
	);
}
