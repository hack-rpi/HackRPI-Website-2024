import ai_prize from "@/public/prizes/AiPrize.jpg";
import sustainability_prize from "@/public/prizes/sustainability.png";
import education_prize from "@/public/prizes/education.jpg";
import quantum_prize from "@/public/prizes/quantum_computer.jpg";
import cybersecurity_prize from "@/public/prizes/cybersecurity.jpg";
import mobile_prize from "@/public/prizes/mobile_app.jpg";
import startup_prize from "@/public/prizes/startup.png";
import data_science_prize from "@/public/prizes/data_science.jpg";
import beginner_prize from "@/public/prizes/coding.webp";
import ugly_code_prize from "@/public/prizes/ugly_code.png";

import { StaticImageData } from "next/image";


export interface Prize {
	name: string;
	amount: string;
	description: string;
	imagePath?: StaticImageData;
}

export const podiumPrizes: Prize[] = [
	{
		name: "1st Place",
		amount: "$1500",
		description: "",
	},
	{
		name: "2nd Place",
		amount: "$1000",
		description: "",
	},
	{
		name: "3rd Place",
		amount: "$750",
		description: "",
	},
];

export const majorPrizes: Prize[] = [
	{
		name: "Best AI Hack",
		amount: "$400 Cash Prize",
		description: "Bust out that linear algebra textbook! The team that has the best usage of AI in their hack will receive $400 in cash!",
		imagePath: ai_prize,
	},
	{
		name: "Best Sustainability Hack",
		amount: "$400 Cash Prize",
		description: "The team that creates the best sustainability hack will receive $400 in cash!",
		imagePath: sustainability_prize,
	},
	{
		name: "Best Education Hack",
		amount: "$400 Cash Prize",
		description: "The team that creates the best education hack will receive $400 in cash!",
		imagePath: education_prize,
	},
];

export const minorPrizes: Prize[] = [
	{
		name: "Best Quantum Computing Hack",
		amount: "TBD ($200 Value)",
		description: "The team that creates the best quantum computing hack will receive a prize valued at $200!",
		imagePath: quantum_prize,
	},
	{
		name: "Best Cybersecurity Hack",
		amount: "TBD ($200 Value)",
		description: "The team that creates the best cybersecurity hack will receive a prize valued at $200!",
		imagePath: cybersecurity_prize,
	},
	{
		name: "Best Mobile Hack",
		amount: "TBD ($200 Value)",
		description: "The team that creates the best mobile hack will receive a prize valued at $200!",
		imagePath: mobile_prize,
	},
	{
		name: "Best Startup Hack",
		amount: "TBD ($200 Value)",
		description: "The team that creates the best startup hack will receive a prize valued at $200!",
		imagePath: startup_prize,
	},
	{
		name: "Best Data Science Hack",
		amount: "TBD ($100 Value)",
		description: "The team that creates the best data science hack will receive a prize valued at $100!",
		imagePath: data_science_prize,
	},
	{
		name: "Best Beginner Hack",
		amount: "TBD ($100 Value)",
		description: "The team that creates the best beginner hack will receive a prize valued at $100!",
		imagePath: beginner_prize,
	},
	{
		name: "Ugliest Code Competition",
		amount: "$50 Cash Prize",
		description: "The participant who wins the ugliest code competition will receive $50 in cash!",
		imagePath: ugly_code_prize,
	},
];
