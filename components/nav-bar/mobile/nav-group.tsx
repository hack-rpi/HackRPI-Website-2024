import { Link } from "@/types/nav-bar-links";
import { useState } from "react";
import NextLink from "next/link";

export default function NavGroup({
	name,
	links,
	onLinkClick,
}: {
	name: string;
	links: Link[];
	onLinkClick: () => void;
}) {
	const [clicked, setClicked] = useState(false);

	return (
		<div
			className="h-fit flex flex-col items-center justify-start w-full mb-2 overflow-hidden"
			onClick={() => setClicked((prev) => !prev)}
		>
			<div
				className={`relative w-11/12 flex items-center justify-between h-12 text-2xl bg-base-100 z-[5] rounded-t pl-2 collapse-arrow ${
					clicked ? "bg-[length:100%_4px] bg-base-200" : "bg-base-100 bg-[length:0%_4px]"
				} bg-gradient-to-r  bg-no-repeat from-hackrpi-primary-blue to-hackrpi-primary-blue bg-left-bottom motion-safe:hover:bg-[length:100%_4px] transition-all duration-200`}
			>
				{name}
				<svg
					viewBox="0 0 256 256"
					id="Flat"
					xmlns="http://www.w3.org/2000/svg"
					className={`mr-2 w-6 h-auto ${
						clicked ? "rotate-0" : "rotate-180"
					} origin-center motion-safe:transition-all duration-200 fill-hackrpi-primary-blue`}
				>
					<path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z" />
				</svg>
			</div>
			<div
				className={`bg-base-200 flex flex-col w-11/12 overflow-hidden  ${
					clicked ? "-translate-y-0 h-fit " : "-translate-y-full h-0 "
				} transition-all duration-200 rounded-b`}
			>
				{links.map((link) => (
					<NavLink key={link.href} href={link.href} onClick={onLinkClick}>
						{link.children}
					</NavLink>
				))}
			</div>
		</div>
	);
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
	return (
		<NextLink
			className="w-full px-1 bg-opacity-0 bg-black hover:bg-opacity-15 text-white text-lg transition-all"
			href={href}
			onClick={onClick}
		>
			{children}
		</NextLink>
	);
}
