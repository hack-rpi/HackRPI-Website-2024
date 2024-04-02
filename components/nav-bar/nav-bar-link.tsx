import NextLink from "next/link";
import React from "react";

export default function NavBarLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<NextLink
			className="w-fit px-1 mx-1 text-white bg-gradient-to-r from-hackrpi-primary-blue to-hackrpi-secondary-light-green bg-[length:0%_3px] bg-no-repeat bg-left-bottom p-1.5 hover:bg-[length:100%_3px] transition-all duration-300 text-xl"
			href={href}
		>
			{children}
		</NextLink>
	);
}
