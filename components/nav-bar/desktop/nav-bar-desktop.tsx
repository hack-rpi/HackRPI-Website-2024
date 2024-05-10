import NextImg from "next/image";
import { NavGroup } from "@/types/nav-bar-links";
import logo from "@/public/HackRPI_Logo_Yellow_Arrow.png";
import RegistrationButton from "@/components/themed-components/registration-link";
import NavGroupComponent from "./nav-group";
import Link from "next/link";

export default function DesktopNavBar({ links }: { links: NavGroup[] }) {
	return (
		<div className="bg-hackrpi-secondary-dark-blue w-full h-16">
			<div className="flex justify-start lg:justify-center items-center h-full">
				<div className="w-1/12 flex items-center justify-center ml-2">
					<NextImg alt="HackRPI Logo" aria-label="Home Page" src={logo} className="w-10 image-full" />
				</div>
				<div className="min-w-fit lg:w-8/12 flex items-center justify-start">
					{links.map((link) => (
						<NavGroupComponent key={link.name} name={link.name} links={link.links} />
					))}
					<Link
						href="/sponsor-us"
						className="mx-2 whitespace-nowrap text-lg xl:text-xl bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-all duration-200 bg-gradient-to-r from-hackrpi-primary-blue to-hackrpi-primary-blue hover:bg-[length:100%_2px]"
						target="_blank"
					>
						Sponsor Us
					</Link>
					<Link
						href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
						className="mx-2 whitespace-nowrap text-lg xl:text-xl bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-all duration-200 bg-gradient-to-r from-hackrpi-primary-blue to-hackrpi-primary-blue hover:bg-[length:100%_2px]"
						target="_blank"
					>
						Code of Conduct
					</Link>
				</div>
				<div className="w-fit flex items-center justify-around ml-2">
					<RegistrationButton className="w-fit whitespace-nowrap" />
				</div>
				<div className="w-1/12"></div>
			</div>
		</div>
	);
}