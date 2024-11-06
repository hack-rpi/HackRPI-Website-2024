import xenia from "../public/team/photos/Xenia_Khusid.jpg";
import adwait from "../public/team/photos/Adwait_Naware.jpg";
import vickie from "../public/team/photos/Vickie_Chen.jpg";
import grace from "../public/team/photos/Grace_Hui.jpg";
import heman from "../public/team/photos/Heman_Kolla.jpg";
import cj from "../public/team/photos/CJ_Marino.jpg";
import cooper from "../public/team/photos/Cooper_Werner.jpg";
import miranda from "../public/team/photos/Miranda_Zheng.jpg";
import aaryan from "../public/team/photos/Aaryan_Gautam.jpg";
import jordan from "../public/team/photos/Jordan_Ye.jpg";
import lefteri from "../public/team/photos/Lefteri_Kapnisakis.jpg";
import shankar from "../public/team/photos/Shankar_Palanickal.jpg";
import suyash from "../public/team/photos/Suyash_Amatya.jpg";
import william from "../public/team/photos/William_Wu.jpg";

export const executive = {
	"Xenia Khusid": xenia,
	"Adwait Naware": adwait,
	"Vickie Chen": vickie,
	"Grace Hui": grace,
	"Heman Kolla": heman,
	"CJ Marino": cj,
	"Cooper Werner": cooper,
	"Miranda Zheng": miranda,
	"Aaryan Gautam": aaryan,
	"Jordan Ye": jordan,
	"Lefteri Kapnisakis": lefteri,
	"Shankar Palanickal": shankar,
	"Suyash Amatya": suyash,
	"William Wu": william,
};

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
	name:
		| "Xenia Khusid"
		| "Adwait Naware"
		| "Vickie Chen"
		| "Grace Hui"
		| "Heman Kolla"
		| "CJ Marino"
		| "Cooper Werner"
		| "Miranda Zheng"
		| "Aaryan Gautam"
		| "Jordan Ye"
		| "Lefteri Kapnisakis"
		| "Shankar Palanickal"
		| "Suyash Amatya"
		| "William Wu";
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
			image: "/team/photos/Xenia_Khusid.jpg",
			"team-color": teamColors.president,
			teamDescription:
				"The President leads the overall planning and execution of the hackathon, coordinating with all teams to ensure a successful event.",
		},
		{
			name: "Adwait Naware",
			role: "Vice President",
			image: "/team/photos/Adwait_Naware.jpg",
			"team-color": teamColors.vicePresident,
			teamDescription:
				"The Vice President supports the President's role, providing leadership and assistance in many aspects of the hackathon.",
		},
		{
			name: "Vickie Chen",
			role: "Director of Outreach",
			image: "/team/photos/Vickie_Chen.jpg",
			"team-color": teamColors.Outreach,
			teamDescription:
				"The Outreach team is responsible for engaging with the community and local students to promote the hackathon and encourage participation.",
		},
		{
			name: "Grace Hui",
			role: "Director of Finance",
			image: "/team/photos/Grace_Hui.jpg",
			"team-color": teamColors.Finance,
			teamDescription:
				"The Finance team is responsible for managing the budget and purchasing necessary items for the hackathon.",
		},
		{
			name: "Heman Kolla",
			role: "Director of Sponsorship",
			image: "/team/photos/Heman_Kolla.jpg",
			"team-color": teamColors.Sponsorship,
			teamDescription:
				"The Sponsorship team is responsible for reaching out to companies and securing sponsorships to support the hackathon.",
		},
		{
			name: "CJ Marino",
			role: "Director of Logistics",
			image: "/team/photos/CJ_Marino.jpg",
			"team-color": teamColors.Logistics,
			teamDescription:
				"The Logistics team is responsible for planning and executing the physical aspects of the hackathon, such as food, swag, transportation, and more.",
		},
		{
			name: "Cooper Werner",
			role: "Director of Technology",
			image: "/team/photos/Cooper_Werner.jpg",
			"team-color": teamColors.Technology,
			teamDescription:
				"The Technology team is responsible for developing and maintaining the hackathon website, discord server, and providing technical support during the event.",
		},
		{
			name: "Miranda Zheng",
			role: "Director of Marketing",
			image: "/team/photos/Miranda_Zheng.jpg",
			"team-color": teamColors.Marketing,
			teamDescription:
				"The Marketing team is responsible for promoting the hackathon and engaging with participants through social media, fliers, and other marketing materials.",
		},
		{
			name: "Suyash Amatya",
			role: "Jr. Director of Marketing",
			image: "/team/photos/Suyash_Amatya.jpg",
			"team-color": teamColors.Marketing,
			teamDescription:
				"The Marketing team is responsible for promoting the hackathon and engaging with participants through social media, fliers, and other marketing materials.",
		},
		{
			name: "Aaryan Gautam",
			role: "Jr. Director of Sponsorship",
			image: "/team/photos/Aaryan_Gautam.jpg",
			"team-color": teamColors.Sponsorship,
			teamDescription:
				"The Sponsorship team is responsible for reaching out to companies and securing sponsorships to support the hackathon.",
		},
		{
			name: "Lefteri Kapnisakis",
			role: "Jr. Director of Logistics",
			image: "/team/photos/Lefteri_Kapnisakis.jpg",
			"team-color": teamColors.Logistics,
			teamDescription:
				"The Logistics team is responsible for planning and executing the physical aspects of the hackathon, such as food, swag, transportation, and more.",
		},
		{
			name: "Shankar Palanickal",
			role: "Jr. Director of Finance",
			image: "/team/photos/Shankar_Palanickal.jpg",
			"team-color": teamColors.Finance,
			teamDescription:
				"The Finance team is responsible for managing the budget and purchasing necessary items for the hackathon.",
		},
		{
			name: "William Wu",
			role: "Jr. Director of Outreach",
			image: "/team/photos/William_Wu.jpg",
			"team-color": teamColors.Outreach,
			teamDescription:
				"The Outreach team is responsible for engaging with the community and local students to promote the hackathon and encourage participation.",
		},
		{
			name: "Jordan Ye",
			role: "Jr. Director of Technology",
			image: "/team/photos/Jordan_Ye.jpg",
			"team-color": teamColors.Technology,
			teamDescription:
				"The Technology team is responsible for developing and maintaining the hackathon website, discord server, and providing technical support during the event.",
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
