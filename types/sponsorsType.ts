export type sponsorTiers = "Obsidian" | "Gold" | "Silver" | "Bronze" | "Collaborators";

export interface SponsorsJSON {
	Obsidian: Sponsor[];
	Gold: Sponsor[];
	Silver: Sponsor[];
	Bronze: Sponsor[];
	Collaborators: Sponsor[];
}

export interface Sponsor {
	name: string;
	logoPath: string;
	url: string;
}
