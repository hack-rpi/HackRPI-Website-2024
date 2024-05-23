export const teamColors = {
	president: { bg: "#303ECF", text: "#ffffff" },
	vicePresident: { bg: "#a12022", text: "#ffffff" },
	Technology: { bg: "#773E8E", text: "#ffffff" },
	Logistics: { bg: "#0185A2", text: "#ffffff" },
	Marketing: { bg: "#E17619", text: "#ffffff" },
	Outreach: { bg: "#DF0C32", text: "#ffffff" },
	Finance: { bg: "#1E8549", text: "#ffffff" },
	Sponsorship: { bg: "#0057A8", text: "#ffffff" },
};

export interface Director {
	name: string;
	role: string;
	image: string;
	"team-color": TeamColor;
	teamDescription: string;
}

export interface Organizer {
	name: string;
	team: "Technology" | "Logistics" | "Marketing" | "Outreach" | "Finance" | "Sponsorship";
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
			image: "/team/photos/defaultUserIcon.jpg",
			"team-color": teamColors.president,
			teamDescription:
				"The President leads the overall planning and execution of the hackathon, coordinating with all teams to ensure a successful event.",
		},
		{
			name: "Adwait Naware",
			role: "Vice President",
			image: "/team/photos/defaultUserIcon.jpg",
			"team-color": teamColors.vicePresident,
			teamDescription:
				"The Vice President supports the President's role, providing leadership and assistance in many aspects of the hackathon.",
		},
		{
			name: "Vickie Chen",
			role: "Director of Outreach",
			image: "/team/photos/defaultUserIcon.jpg",
			"team-color": teamColors.Outreach,
			teamDescription:
				"The Outreach team is responsible for engaging with the community and local students to promote the hackathon and encourage participation.",
		},
		{
			name: "Grace Hui",
			role: "Director of Finance",
			image: "/team/photos/defaultUserIcon.jpg",
			"team-color": teamColors.Finance,
			teamDescription:
				"The Finance team is responsible for managing the budget and purchasing necessary items for the hackathon.",
		},
		{
			name: "Heman Kolla",
			role: "Director of Sponsorship",
			image: "/team/photos/defaultUserIcon.jpg",
			"team-color": teamColors.Sponsorship,
			teamDescription:
				"The Sponsorship team is responsible for reaching out to companies and securing sponsorships to support the hackathon.",
		},
		{
			name: "CJ Marino",
			role: "Director of Logistics",
			image: "/team/photos/defaultUserIcon.jpg",
			"team-color": teamColors.Logistics,
			teamDescription:
				"The Logistics team is responsible for planning and executing the physical aspects of the hackathon, such as food, swag, transportation, and more.",
		},
		{
			name: "Cooper Werner",
			role: "Director of Technology",
			image: "/team/photos/defaultUserIcon.jpg",
			"team-color": teamColors.Technology,
			teamDescription:
				"The Technology team is responsible for developing and maintaining the hackathon website, discord server, and providing technical support during the event.",
		},
		{
			name: "Miranda Zheng",
			role: "Director of Marketing",
			image: "/team/photos/defaultUserIcon.jpg",
			"team-color": teamColors.Marketing,
			teamDescription:
				"The Marketing team is responsible for promoting the hackathon and engaging with participants through social media, fliers, and other marketing materials.",
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
		{
			name: "Test Organizer",
			team: "Sponsorship",
		},
		{
			name: "Test Organizer",
			team: "Sponsorship",
		},
		{
			name: "Test Organizer",
			team: "Sponsorship",
		},
		{
			name: "Test Organizer",
			team: "Sponsorship",
		},
		{
			name: "Test Organizer",
			team: "Sponsorship",
		},
		{
			name: "Test Organizer",
			team: "Sponsorship",
		},
		{
			name: "Test Organizer",
			team: "Sponsorship",
		},
	],
};
