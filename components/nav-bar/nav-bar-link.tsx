import NextLink from "next/link";
import React from "react";

export default function NavBarLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void}) {
	return (
		<NextLink
			className="w-fit px-1 mx-1 bg-opacity-0 bg-black hover:bg-opacity-15 text-white text-lg transition-all rounded-md"
			href={href}
			onClick={onClick}
		>
			{children}
		</NextLink>
	);
}
