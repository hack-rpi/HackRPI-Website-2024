import type { Event } from "@/data/schedule";

export type TimelineLabel = {
	str: string;
	unix: number;
};

type ScheduleProps = {
	times: TimelineLabel[];
	events: Event[];
	currentTime: Date;
};

export default function Schedule(props: ScheduleProps) {
	return (
		<div className="relative flex w-full h-fit items-center justify-center">
			<div className="flex flex-col w-full h-fit items-start justify-start">
				{props.times.map((time) => (
					<TimelineElement time={time} currentTime={props.currentTime} />
				))}
			</div>
			<div className="absolute top-0 right-0 flex-grow flex-shrink basis-auto w-full h-full pl-24 sm:pl-28">
				<div className="w-1/4 h-24 bg-hackrpi-primary-blue overflow-hidden ml-2 mt-2 rounded-md shadow-md shadow-black text-black">
					<p>Test Event</p>
					<p>Location • Speaker</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem natus at deleniti veritatis
						excepturi dolorum expedita! Officiis tempore aut porro vitae in ratione accusamus eos repellat voluptas,
						perferendis id.
					</p>
				</div>

				<div className="w-1/4 ml-[26%] h-24 bg-hackrpi-primary-blue overflow-hidden mt-2 rounded-md shadow-md shadow-black text-black">
					<p>Test Event</p>
					<p>Location • Speaker</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem natus at deleniti veritatis
						excepturi dolorum expedita! Officiis tempore aut porro vitae in ratione accusamus eos repellat voluptas,
						perferendis id.
					</p>
				</div>

				<div className="w-1/4 h-24 bg-hackrpi-primary-blue overflow-hidden ml-[26%] mt-2 rounded-md shadow-md shadow-black text-black">
					<p>Test Event</p>
					<p>Location • Speaker</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem natus at deleniti veritatis
						excepturi dolorum expedita! Officiis tempore aut porro vitae in ratione accusamus eos repellat voluptas,
						perferendis id.
					</p>
				</div>

				<div className="w-1/4 h-24 bg-hackrpi-primary-blue overflow-hidden ml-[52%] mt-2 rounded-md shadow-md shadow-black text-black">
					<p>Test Event</p>
					<p>Location • Speaker</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem natus at deleniti veritatis
						excepturi dolorum expedita! Officiis tempore aut porro vitae in ratione accusamus eos repellat voluptas,
						perferendis id.
					</p>
				</div>
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
