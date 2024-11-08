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
import thin_air from "@/public/sponsors/sponsor_logos/ThinAir.png";
import palantir from "@/public/sponsors/sponsor_logos/Palantir.png";
import accessibility_prize from "@/public/prizes/Accessibility.webp";

import { StaticImageData } from "next/image";

export interface Prize {
	name: string;
	amount: string;
	description: string;
	imagePath?: StaticImageData;
}

export const podiumPrizes: Prize[] = [
	{
		name: "1st",
		amount: "$1500",
		description: "",
	},
	{
		name: "2nd",
		amount: "$750",
		description: "",
	},
];

export const majorPrizes: Prize[] = [
	{
		name: "Best Use of Anthropic Claude's Computer Use API",
		amount: "$800 Cash Prize",
		description: `Presented by ThinAir: Think you can build the next-gen
		automation tools? Join this track to create powerful browser automation
		systems using Claude’s Computer Use API! Imagine you’re an SMB looking
		to streamline operations, or maybe you just want to create a cool
		project to impress your friends—this is your chance to bring those 
		ideas to life. Use the API to automate complex workflows, pull data
		from multiple sources, and build systems that interact seamlessly
		across tabs and browsers. The possibilities are endless, and the
		best projects will score exclusive cash prizes, swag and ultimate
		bragging rights!`,
		imagePath: thin_air,
	},
	{
		name: " Best Public Health Innovation",
		amount: "$500 Cash Prize",
		description:
			"Presented by Palantir: This prize recognizes outstanding efforts in addressing critical public health challenges, improving patient outcomes, and/or enhancing community well-being. Award recipients will have demonstrated exceptional creativity, technical skill, and a dedication to making a meaningful impact on global health through thoughtful analysis and implementation of data-driven solutions.",
		imagePath: palantir,
	},
	{
		name: "Most Accessible Hack",
		amount: "$500 Cash Prize",
		description:
			"Accessibility matters! This prize goes to the project that best improves urban living for people with disabilities, making city life more inclusive and accessible to all.",
		imagePath: accessibility_prize,
	},
	{
		name: "Best AI Hack",
		amount: "$400 Cash Prize",
		description:
			"Spin up your GPUs and download some data! The project that best utilizes AI to enhance urban living, tackling city issues with advanced algorithms, will take home this prize.",
		imagePath: ai_prize,
	},
	{
		name: "Best Sustainability Hack",
		amount: "$400 Cash Prize",
		description:
			"Go green or go home! This prize recognizes the project that most creatively tackles environmental challenges in the city, making urban living sustainable and eco-friendly.",
		imagePath: sustainability_prize,
	},
	{
		name: "Best Education Hack",
		amount: "$400 Cash Prize",
		description:
			"Time to hit the books—or tablets! Awarded to the project that best improves urban education, making city learning more fun, accessible, and effective.",
		imagePath: education_prize,
	},
];

export const minorPrizes: Prize[] = [
	{
		name: "Best Quantum Computing Hack",
		amount: "JBL Speaker ($200 Value)",
		description:
			"Entangle some qubits and blow our minds! This prize celebrates the project that uses quantum computing to solve urban problems, proving that the future really is now (and at RPI!).",
		imagePath: quantum_prize,
	},
	{
		name: "Best Cybersecurity Hack",
		amount: "1 Year Subscriptions to NordVPN, NordPass, and Incogni (Total Value: $200)",
		description:
			"Defend the digital city walls! Awarded to the project that best boosts urban cybersecurity, keeping our city's data safe from cybervillains.",
		imagePath: cybersecurity_prize,
	},
	{
		name: "Best Mobile Hack",
		amount: "Hydroflasks + O'Reilly Media App Development Textbooks ($200 Value)",
		description:
			"Got an app for that? Recognizes the project that delivers the slickest, most useful mobile application for city dwellers, making urban life just a tap away.",
		imagePath: mobile_prize,
	},
	{
		name: "Best Startup Hack",
		amount: "LED Projector + O'Reilly Media Machine Learning Textbooks ($200 Value)",
		description:
			"Shark Tank here we come! Celebrates the project with the most potential to become an urban-focused startup, showcasing innovative business ideas to transform city life.",
		imagePath: startup_prize,
	},
	{
		name: "Best Data Science Hack",
		amount: "Amazon Echo Dot Speaker + O'Reilly Media Data Science Textbooks (Value: $100)",
		description:
			"Crunch those numbers! Given to the project that uses data science to unravel the mysteries of city living, driving decisions with insightful analytics.",
		imagePath: data_science_prize,
	},
	{
		name: "Best Beginner Hack",
		amount: "NYC Lego Sets + O'Reilly Media Software Engineering Foundations Textbooks ($100 Value)",
		description:
			"Newbies unite! Awarded to the top project by first-time hackers that addresses urban challenges, showing off their fresh creativity and hard work.",
		imagePath: beginner_prize,
	},
	{
		name: "Ugliest Code Competition",
		amount: "$50 Cash Prize",
		description:
			"Embrace the spaghetti! A fun award for the participant with the most convoluted code in our ugliest code competition, reminding us all why clean coding matters, especially in urban tech.",
		imagePath: ugly_code_prize,
	},
];
