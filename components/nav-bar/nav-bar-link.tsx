import NextLink from "next/link";
import React from "react";

export default function NavBarLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<NextLink
			className="w-fit px-1 mx-3 bg-black bg-opacity-0 hover:bg-opacity-15 text-black text-2xl hover:scale-110 transition-all font-bold rounded-md"
			href={href}
		>
			{children}
		</NextLink>
	);
}