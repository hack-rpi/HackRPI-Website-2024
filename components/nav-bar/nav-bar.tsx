import NavBarLink from "./nav-bar-link";

export default function NavBar() {
	return (
		<div className="bg-hackrpi-secondary-yellow w-full h-16">
			<div className="flex justify-start items-center h-full">
				<NavBarLink href="/">
					<div className="flex justify-around items-center">
						{/* This logo should change, miranda has one with a different yellow arrow */}
						<img src="HackRPI_Logo_Outlined.png" className="h-14" />
						<h1 className="text-black text-2xl font-bold ml-2">HackRPI 11</h1>
					</div>
				</NavBarLink>
				<NavBarLink href="/sponsor-us">Sponsor Us</NavBarLink>
			</div>
		</div>
	);
}
