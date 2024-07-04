export interface Prize {
	name: string;
	amount: string;
	description: string;
	imagePath: string;
}

export const podiumPrizes: Prize[] = [
	{
		name: "1st Place",
		amount: "$1500",
		description: "",
		imagePath: "",
	},
	{
		name: "2nd Place",
		amount: "$1000",
		description: "",
		imagePath: "",
	},
	{
		name: "3rd Place",
		amount: "$750",
		description: "",
		imagePath: "",
	},
];

export const majorPrizes: Prize[] = [
	{
		name: "Best AI Hack",
		amount: "$400 Cash Prize",
		description: "The team that creates the best AI hack will receive $400 in cash!",
		imagePath: "/prizes/ai.png",
	},
	{
		name: "Best Sustainability Hack",
		amount: "$400 Cash Prize",
		description: "The team that creates the best sustainability hack will receive $400 in cash!",
		imagePath: "/prizes/sustainability.png",
	},
	{
		name: "Best Education Hack",
		amount: "$400 Cash Prize",
		description: "The team that creates the best education hack will receive $400 in cash!",
		imagePath: "/prizes/education.png",
	},
];

export const minorPrizes: Prize[] = [
	{
		name: "Best Quantum Computing Hack",
		amount: "TBD ($200 Value)",
		description: "The team that creates the best quantum computing hack will receive a prize valued at $200!",
		imagePath: "/prizes/quantum.png",
	},
	{
		name: "Best Cybersecurity Hack",
		amount: "TBD ($200 Value)",
		description: "The team that creates the best cybersecurity hack will receive a prize valued at $200!",
		imagePath: "/prizes/cybersecurity.png",
	},
	{
		name: "Best Mobile Hack",
		amount: "TBD ($200 Value)",
		description: "The team that creates the best mobile hack will receive a prize valued at $200!",
		imagePath: "/prizes/mobile.png",
	},
	{
		name: "Best Startup Hack",
		amount: "TBD ($200 Value)",
		description: "The team that creates the best startup hack will receive a prize valued at $200!",
		imagePath: "/prizes/startup.png",
	},
	{
		name: "Best Data Science Hack",
		amount: "TBD ($100 Value)",
		description: "The team that creates the best data science hack will receive a prize valued at $100!",
		imagePath: "/prizes/data-science.png",
	},
	{
		name: "Best Beginner Hack",
		amount: "TBD ($100 Value)",
		description: "The team that creates the best beginner hack will receive a prize valued at $100!",
		imagePath: "/prizes/beginner.png",
	},
	{
		name: "Ugliest Code Competition",
		amount: "$50 Cash Prize",
		description: "The participant who wins the ugliest code competition will receive $50 in cash!",
		imagePath: "/prizes/ugly-code.png",
	},
];
