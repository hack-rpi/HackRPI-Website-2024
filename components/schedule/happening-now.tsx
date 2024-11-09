import type { Event } from "@/data/schedule";

type HappeningNowProps = {
	events: Event[];
};

export default function HappeningNow(props: HappeningNowProps) {
	return (
		<div className="flex flex-col items-start w-full h-fit mb-4">
			<h1 className="w-full h-fit bg-hackrpi-secondary-light-blue p-2 text-xl font-bold text-white ">Happening Now</h1>
			{props.events.map((event) => (
				<HappeningNowCard event={event} key={event.id} />
			))}
		</div>
	);
}

function HappeningNowCard(props: { event: Event }) {
	function extractLettersFromTitle(title: string): string {
		// If a title contains no spaces, then use the first letter of the title
		if (!title.includes(" ")) {
			return title[0];
		}
		// If a title contains spaces, then use the first letter of the first two words
		const words = title.split(" ");
		return words[0][0] + words[1][0];
	}

	return (
		<div className="w-full h-20 overflow-hidden flex items-center justify-between border-b border-gray-400">
			<div className="min-w-20 flex items-center justify-center">
				<div className="w-16 h-16 rounded-full bg-hackrpi-primary-dark-green text-white font-bold text-4xl flex items-center justify-center">
					{extractLettersFromTitle(props.event.title)}
				</div>
			</div>
			<div className="w-fit  mx-4 min-w-64 flex flex-col items-center justify-center px-4 ">
				<h3 className="description-box font-bold text-white text-xl">{props.event.title}</h3>
				<p className="text-nowrap">
					{props.event.location} {props.event.speaker != "" ? `• ${props.event.speaker}` : ""}{" "}
				</p>
			</div>
			<div className="flex-grow flex-shrink basis-auto hidden sm:flex">
				<p className="description-box">{props.event.description}</p>
			</div>
		</div>
	);
}
