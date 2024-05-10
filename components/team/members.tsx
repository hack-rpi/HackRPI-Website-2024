const teamColors = {
	president: { bg: "bg-[#3d49d1]", text: "text-white" },
	vicePresident: { bg: "bg-[#a12022]", text: "text-white" },
	Technology: { bg: "bg-[#9b59b6]", text: "text-white" },
	Logistics: { bg: "bg-[#f1c40f]", text: "text-white" },
	Marketing: { bg: "bg-[#e67e22]", text: "text-white" },
	Outreach: { bg: "bg-[#f6506f]", text: "text-white" },
	Finance: { bg: "bg-[#2ecc71]", text: "text-white" },
	Sponsorship: { bg: "bg-[#53acff]", text: "text-white" },
};

export interface Director {
	name: string;
	role: string;
	image: string;
	"team-color": TeamColor;
}

export interface Organizer {
	name: string;
	team: string;
}

export interface TeamColor {
	bg: string;
	text: string;
}

export interface Team {
	directors: Director[];
	organizers: Organizer[];
}

export const team: Team = {
	directors: [
		{
			name: "Xenia Khusid",
			role: "President",
			image: "/team/defaultUserIcon.jpg",
			"team-color": teamColors.president,
		},
		{
			name: "Adwait Naware",
			role: "Vice President",
			image: "/team/defaultUserIcon.jpg",
			"team-color": teamColors.vicePresident,
		},
		{
			name: "Vickie Chen",
			role: "Director of Outreach",
			image: "/team/defaultUserIcon.jpg",
			"team-color": teamColors.Outreach,
		},
		{
			name: "Grace Hui",
			role: "Director of Finance",
			image: "/team/defaultUserIcon.jpg",
			"team-color": teamColors.Finance,
		},
		{
			name: "Heman Kolla",
			role: "Director of Sponsorship",
			image: "/team/defaultUserIcon.jpg",
			"team-color": teamColors.Sponsorship,
		},
		{
			name: "CJ Marino",
			role: "Director of Logistics",
			image: "/team/defaultUserIcon.jpg",
			"team-color": teamColors.Logistics,
		},
		{
			name: "Cooper Werner",
			role: "Director of Technology",
			image: "/team/defaultUserIcon.jpg",
			"team-color": teamColors.Technology,
		},
		{
			name: "Miranda Zheng",
			role: "Director of Marketing",
			image: "/team/defaultUserIcon.jpg",
			"team-color": teamColors.Marketing,
		},
	],
	organizers: [
		{
			name: "Test Organizer",
			team: "Technology",
		},
		{
			name: "Test Organizer",
			team: "Logistics",
		},
		{
			name: "Test Organizer",
			team: "Marketing",
		},
		{
			name: "Test Organizer",
			team: "Outreach",
		},
		{
			name: "Test Organizer",
			team: "Finance",
		},
		{
			name: "Test Organizer",
			team: "Sponsorship",
		},
	],
};
