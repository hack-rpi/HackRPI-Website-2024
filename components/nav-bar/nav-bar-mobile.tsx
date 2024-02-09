import NavBarLink from "./nav-bar-link";
import { useState, useEffect, use } from "react";

export default function NavBarMobile() {
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
				className={`absolute w-72 h-full bg-hackrpi-secondary-yellow z-20 ${
					navMenuOpen ? "left-0" : "-left-72"
				} transition-all`}
			>
				<div className="flex flex-col justify-start items-center w-full h-full my-1">
					<div className="flex w-full items-center justify-center sticky">
						<button onClick={() => setNavMenuOpen(!navMenuOpen)} className="h-10 w-10">
							<img src="menu-icon.svg" />
						</button>
						<NavBarLink href="/">
							<div className="flex justify-around items-center">
								<img src="HackRPI_Logo_Outlined.png" className="h-14 ml-1" />
								<h1 className="text-black text-2xl font-bold ml-2">HackRPI 11</h1>
							</div>
						</NavBarLink>
					</div>
					<NavBarLink href="/sponsor-us">
						<h1 className="text-black text-2xl font-bold">Sponsor Us</h1>
					</NavBarLink>
				</div>
			</div>
			<div className="bg-hackrpi-secondary-yellow w-full h-16 sticky top-0">
				<div className="flex justify-start items-center h-full">
					<button onClick={() => setNavMenuOpen(!navMenuOpen)} className="h-10 w-10 ml-2">
						<img src="menu-icon.svg" />
					</button>
					<NavBarLink href="/">
						<div className="flex justify-around items-center">
							<img src="HackRPI_Logo_Outlined.png" className="h-14 ml-1" />
							<h1 className="text-black text-2xl font-bold ml-2">HackRPI 11</h1>
						</div>
					</NavBarLink>
				</div>
			</div>
		</>
	);
}
