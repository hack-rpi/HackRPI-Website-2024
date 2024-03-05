import NextLink from "next/link";
import React from "react";

export default function NavBarLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<NextLink
			className="w-fit px-1 mx-1 bg-opacity-0 bg-black hover:bg-opacity-15 text-white text-2xl transition-all rounded-md"
			href={href}
		>
			{children}
		</NextLink>
	);
}
