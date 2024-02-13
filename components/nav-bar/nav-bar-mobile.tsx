import { NavBarLinkType } from "@/types/nav-bar-links";
import NavBarLink from "./nav-bar-link";
import { useState, useEffect } from "react";
import NextImg from "next/image";

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
			<div
				className={`absolute w-screen h-full bg-black bg-opacity-25 z-10 ${navMenuOpen ? "visible" : "invisible"}`}
				onClick={() => setNavMenuOpen(false)}
			></div>
			<div
				className={`absolute w-80 h-full bg-hackrpi-secondary-yellow z-20 ${
					navMenuOpen ? "left-0" : "-left-80"
				} transition-all duration-300`}
			>
				<div className="flex flex-col justify-start items-center w-full h-full my-1">
					<div className="flex w-full items-center justify-center">
						<button onClick={() => setNavMenuOpen(!navMenuOpen)} className="h-10 w-10">
							<NextImg alt="Navigation Menu" src="menu-icon.svg" width="100" height="100" />
						</button>
						<NavBarLink href="/">
							<div className="flex justify-around items-center">
								<NextImg
									alt="HackRPI"
									src="/HackRPI_Logo_Outlined.png"
									className="h-14 ml-1"
									width="100"
									height="100"
								/>
								<h1 className="text-black text-2xl font-bold ml-2">HackRPI 2024</h1>
							</div>
						</NavBarLink>
					</div>
					<hr className="w-full border-black mb-2" />
					{links.map((link) => (
						<NavBarLink key={link.href} href={link.href}>
							{link.children}
						</NavBarLink>
					))}
				</div>
			</div>
			<div className="bg-hackrpi-secondary-yellow w-full h-16 sticky top-0">
				<div className="flex justify-start items-center h-full">
					<button onClick={() => setNavMenuOpen(!navMenuOpen)} className="h-10 w-10 ml-2">
						<NextImg alt="Navigation Menu" src="menu-icon.svg" width="100" height="100" />
					</button>
					<NavBarLink href="/">
						<div className="flex justify-around items-center">
							<NextImg alt="HackRPI" src="/HackRPI_Logo_Outlined.png" className="h-14 ml-1" height="100" width="100" />
							<h1 className="text-black text-2xl font-bold ml-2">HackRPI 2024</h1>
						</div>
					</NavBarLink>
				</div>
			</div>
		</>
	);
}
