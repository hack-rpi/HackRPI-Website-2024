import NextImage from "next/image";

type CardProps = {
	svgPath: string;
	link: string;
	name: string;
	bgGradientFrom: string;
	bgGradientTo: string;
};

const links: CardProps[] = [
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
		<div className="bg-hackrpi-secondary-light-blue w-full min-h-64 h-fit absolute bottom-0">
			<div className="flex flex-col justify-between items-center p-2 min-h-64 h-fit">
				<div className="w-full flex items-center justify-center">
					<div className="w-1/4"></div>
					<div className="w-1/2 flex items-center justify-center">
						<h1 className="text-4xl font-bold w-full">
							Join us this coming November 9-10, 2024 to learn, hack, and make our cities better!
						</h1>
					</div>
					<div className="w-1/4 flex items-center justify-around">
						<a href="#home" className="text-xl font-bold flex items-center justify-center">
							Return to top <NextImage src="/caret.svg" alt="Arrow Up" width={40} height={40} />
						</a>
						<a href="https://mlh.io" className="btn btn-secondary text-xl" target="_blank">
							Register Now
						</a>
					</div>
				</div>
				<div className="flex justify-around items-center w-fit px-4 m-2">
					{links.map((link) => (
						<Card {...link} key={link.name} />
					))}
				</div>
				<h3 className="text-xl font-bold">(c) 2024 HackRPI</h3>
				<h3 className="text-xl font-bold">Made with ❤️ by HackRPI</h3>
			</div>
		</div>
	);
}

function Card(props: CardProps) {
	return (
		<a
			href={props.link}
			aria-label={props.name}
			className={`w-fit h-fit
			 m-4 bg-opacity-100 bg-transparent hover:bg-gradient-to-tr  
			 ${props.bgGradientFrom} ${props.bgGradientTo}
			  rounded-full p-2 hover:bg-opacity-0 transition-all duration-300 ease-[cubic-bezier(.43,-0.72,.47,1.8)]
				motion-safe:hover:scale-150 motion-reduce:scale-0`}
		>
			<NextImage src={props.svgPath} alt={props.name} height={35} width={35} />
		</a>
	);
}
