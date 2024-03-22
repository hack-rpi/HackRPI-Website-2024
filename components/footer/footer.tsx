import RegistrationButton from "../title-components/registration-button";
import Card, { CardProps } from "./socials-card";
import NextImage from "next/image";
import logo from "@/public/HackRPI-logo-blue.png";
import { links } from "@/types/nav-bar-links";
import NavBarLink from "../nav-bar/nav-bar-link";
import HackRPILink from "../themed_components/hackrpi-link";

const socialLinks: CardProps[] = [
	{
		svgPath: "/social/instagram.svg",
		link: "https://www.instagram.com/hack.rpi/",
		name: "Instagram",
		bgGradientFrom: "from-[#FD1D1D]",
		bgGradientTo: "to-[#405DE6]",
	},
	{
		svgPath: "/social/discord.svg",
		link: "https://discord.gg/Pzmdt7FYnu",
		name: "Discord",
		bgGradientFrom: "from-[#5865F2]",
		bgGradientTo: "to-[#7289da]",
	},
	{
		svgPath: "/social/email.svg",
		link: "mailto:hackrpi@rpi.edu",
		name: "Email",
		bgGradientFrom: "to-[#0063b0]",
		bgGradientTo: "from-[#218cff]",
	},
	{
		svgPath: "/social/tiktok.svg",
		link: "https://www.tiktok.com/@hackrpi",
		name: "TikTok",
		bgGradientFrom: "from-[#ff0050]",
		bgGradientTo: "to-[#00f2ea]",
	},
	{
		svgPath: "/social/linkedin.svg",
		link: "https://www.linkedin.com/company/hackrpiorganizingteam/",
		name: "LinkedIn",
		bgGradientFrom: "from-[#0077B5]",
		bgGradientTo: "to-[#0077B5]",
	},
];

export default function Footer() {
	return (
		<div className="bg-hackrpi-secondary-light-blue w-screen h-fit z-[5] ">
			<div className="flex flex-col justify-between items-center p-2 h-full w-full">
				<div className="flex h-fit items-start justify-center w-full flex-wrap">
					<div className="h-fit w-5/6 sm:w-1/2 min-w-[320px]">
						<LeftSide />
					</div>
					<div className="h-fit w-5/6 sm:w-1/2 min-w-[320px]">
						<RightSide />
					</div>
				</div>
				<div className="h-14 w-full flex items-center justify-center flex-col">
					<h3 className="text-lg">Made with ❤️ by HackRPI</h3>
					<h3 className="text-lg">(c) 2024 HackRPI</h3>
				</div>
			</div>
		</div>
	);
}

function LeftSide() {
	return (
		<div className="h-full w-full flex flex-col items-start justify-start p-4">
			<div className="flex items-center justify-start border-b border-base-content w-full p-1 mb-2 h-20">
				<NextImage src={logo} alt="HackRPI Logo" className="w-14 image-full mr-4" />
				<h1 className="text-4xl xs:text-5xl md:text-6xl font-bold">HACKRPI</h1>
			</div>
			<div className="w-full h-full flex flex-col items-start justify-around">
				<p className="mb-4">
					HackRPI invites you to tackle the challenges of tomorrow's cities! Whether you're passionate about
					sustainability, technology, or community development, come build the next big urban upgrade with us. Secure
					your spot today!
				</p>
				<HackRPILink href="https://changethislink.com"> Register and Join Us Today! </HackRPILink>
			</div>
		</div>
	);
}

function RightSide() {
	return (
		<div className="h-full w-full flex flex-col items-start justify-start p-4 ">
			<div className="flex items-center justify-start border-b border-base-content w-full p-1 mb-4 h-20">
				<h1 className="text-4xl xs:text-5xl md:text-6xl font-bold">Links</h1>
			</div>
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-full md:w-2/3 h-full flex items-start justify-around mb-6">
					{socialLinks.map((link) => (
						<Card key={link.link} {...link} />
					))}
				</div>
				<div className="flex w-full items-center justify-center flex-wrap">
					{links.map((link) => (
						<NavBarLink key={link.href} href={link.href}>
							{link.children}
						</NavBarLink>
					))}
				</div>
			</div>
		</div>
	);
}
