import type { Event } from "@/data/schedule";
import { arrangeEvents } from "@/utils/schedule";
import { useState } from "react";

export type TimelineLabel = {
	str: string;
	unix: number;
};

type ScheduleProps = {
	times: TimelineLabel[];
	events: Event[];
	currentTime: Date;
	onEventClick: (event: Event) => void;
};

export default function Schedule(props: ScheduleProps) {
	const [eventsInColumns] = useState<Event[][]>(() => arrangeEvents(props.events));

	return (
		<div className="relative flex w-full h-fit items-center justify-center">
			<div className="flex flex-col w-full h-fit items-start justify-start">
				{props.times.map((time) => (
					<TimelineElement time={time} currentTime={props.currentTime} key={time.str} />
				))}
			</div>
			<div className="absolute top-0 right-0 flex-grow flex-shrink basis-auto w-full h-full pl-24 sm:pl-28 flex items-start justify-start">
				{eventsInColumns.map((column, index) => (
					<div
						key={index}
						className="relative flex flex-col flex-grow flex-shrink basis-auto h-full mx-0.5 xs:mx-1 sm:mx-2"
					>
						{column.map((event) => {
							const { top, height } = calculateTopAndHeightOfEvent(event, props.times);
							return (
								<div
									key={event.id}
									className={`absolute w-full h-full rounded-lg shadow-md mb-4 overflow-hidden ${
										props.currentTime.getTime() < event.startTime
											? "bg-hackrpi-primary-blue text-black"
											: props.currentTime.getTime() < event.endTime // eslint-disable-next-line
												? "bg-hackrpi-secondary-yellow text-black" // eslint-disable-next-line
												: "bg-hackrpi-secondary-light-blue text-gray-300"
									}`}
									style={{
										top,
										height,
									}}
									onClick={() => props.onEventClick(event)}
								>
									<p className=" font-bold text-sm xs:text-base sm:text-lg border-b-2 border-black pl-1">
										{event.title}
									</p>
									<p className=" text-xs xs:text-sm sm:text-base border-b-2 border-black pl-1">
										{event.location} {event.speaker != "" ? `• ${event.speaker}` : ""}{" "}
									</p>
									<p className=" font-normal text-xs xs:text-sm sm:text-base pl-1">{event.description}</p>
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}

function TimelineElement(props: { time: TimelineLabel; currentTime: Date }) {
	return (
		<div className="flex flex-col items-start justify-start w-full h-24">
			<div className="flex items-center justify-start w-full h-fit">
				<p
					className={` text-white mr-2 w-16 sm:w-20  ${
						props.currentTime.getTime() > props.time.unix &&
						props.currentTime.getTime() < props.time.unix + 60 * 60 * 1000
							? "font-bold text-sm xs:text-base sm:text-lg"
							: "font-normal text-xs xs:text-sm sm:text-base"
					}`}
				>
					{props.time.str}
				</p>
				<div className="bg-white w-2 h-2 rounded-full mr-4 "></div>
				<hr className="flex-grow flex-shrink basis-auto border border-gray-400" id={`${props.time.unix}`} />
			</div>
			<div
				className={`w-2 h-20 rounded-full ml-[72px] sm:ml-[88px] ${
					props.currentTime.getTime() < props.time.unix + 60 * 60 * 1000 ? "bg-hackrpi-secondary-yellow" : "bg-white"
				}`}
			></div>
		</div>
	);
}

function calculateTopAndHeightOfEvent(event: Event, times: TimelineLabel[]): { top: number; height: number } {
	const HOUR_HEIGHT = 96; // 96px in height for each hour
	let nearestStartTime = times[0];
	for (let i = 0; i < times.length; i++) {
		if (times[i].unix <= event.startTime) {
			nearestStartTime = times[i];
		}
	}

	const top =
		document.getElementById(`${nearestStartTime.unix}`)?.offsetTop ||
		0 + ((event.startTime - nearestStartTime.unix) / 3600000) * HOUR_HEIGHT;
	const height = ((event.endTime - event.startTime) / 3600000) * HOUR_HEIGHT - 8;

	return { top, height };
}
