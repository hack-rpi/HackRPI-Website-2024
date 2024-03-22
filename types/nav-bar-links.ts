import React from "react";

export interface NavBarLinkType {
	href: string;
	children: React.ReactNode;
}

export const links: NavBarLinkType[] = [
	{ href: "/", children: "Home" },
	{ href: "/sponsor-us", children: "Sponsor Us" },
];
