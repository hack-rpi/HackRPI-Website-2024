import React from "react";

export interface Link {
	href: string;
	children: React.ReactNode;
}

export interface NavGroup {
	name: string;
	links: Link[];
}
