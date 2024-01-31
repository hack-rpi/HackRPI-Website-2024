import NextLink from "next/link";
import NavBarLink from "./nav-bar-link";

export default function NavBar() {
	return (
		<div className="bg-hackrpi-secondary-yellow w-full h-12">
			<div className="flex justify-start items-center h-full">
				<NavBarLink href="/">HackRPI logo here</NavBarLink>
                <NavBarLink href="/sponsor-us">Sponsor Us</NavBarLink>
			</div>
		</div>
	);
}
