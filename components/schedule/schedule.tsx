import type { Event } from "@/data/schedule";



export type TimelineLabel = {
	str: string;
	unix: number;
}

type ScheduleProps = {
	times: TimelineLabel[];
	events: Event[];
}

export default function Schedule(props: ScheduleProps) {
	return (
		<div>
			<h1>Timeline</h1>
		</div>
	);
}