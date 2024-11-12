"use client";

import { useState, useEffect, useMemo } from "react";
import { type DeltaTime } from "@/utils/timer";
import { calculateDeltaTime } from "@/utils/timer";

export default function Timer() {
	const hackathonStart = useMemo(() => new Date(1731168000000), []); // November 9, 2024 11:00:00 AM
	const hackathonEnd = useMemo(() => new Date(1731254400000), []); // November 10, 2024 11:00:00 AM

	const [DeltaTime, setDeltaTime] = useState<DeltaTime>(
		Date.now() > hackathonStart.getTime()
			? calculateDeltaTime(new Date(), hackathonEnd)
			: calculateDeltaTime(new Date(), hackathonStart),
	);

	const [hackathonStarted, setHackathonStarted] = useState(false);
	const [hackathonEnded, setHackathonEnded] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			const currentTime = new Date();

			if (currentTime.getTime() > hackathonStart.getTime()) {
				setHackathonStarted(true);
			}

			if (currentTime.getTime() > hackathonEnd.getTime()) {
				setHackathonEnded(true);
			}

			if (currentTime.getTime() > hackathonStart.getTime()) {
				setDeltaTime(calculateDeltaTime(currentTime, hackathonEnd));
			} else {
				setDeltaTime(calculateDeltaTime(currentTime, hackathonStart));
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [hackathonStart, hackathonEnd]);

	return (
		<div className="w-11/12 desktop:w-full 2xl:w-10/12 h-fit flex flex-col items-start ">
			{hackathonStarted && !hackathonEnded ? <h1 className="text-4xl font-bold mb-2">SUBMISSIONS DUE: </h1> : null}
			{hackathonEnded ? <h1 className="text-4xl font-bold mb-2">THANKS FOR JOINING US! </h1> : null}
			<div className="flex items-center justify-between w-full mb-4">
				<Circle bgColor="bg-subway-red" textColor="text-white">
					{DeltaTime.months > 9 ? DeltaTime.months : "0" + DeltaTime.months}
				</Circle>
				<Circle bgColor="bg-subway-yellow" textColor="text-white">
					{DeltaTime.days > 9 ? DeltaTime.days : "0" + DeltaTime.days}
				</Circle>
				<Circle bgColor="bg-subway-green" textColor="text-white">
					{DeltaTime.hours > 9 ? DeltaTime.hours : "0" + DeltaTime.hours}
				</Circle>
				<Circle bgColor="bg-subway-blue" textColor="text-white">
					{DeltaTime.minutes > 9 ? DeltaTime.minutes : "0" + DeltaTime.minutes}
				</Circle>
				<Circle bgColor="bg-subway-purple" textColor="text-white">
					{DeltaTime.seconds > 9 ? DeltaTime.seconds : "0" + DeltaTime.seconds}
				</Circle>
			</div>
			<div className="flex items-center justify-between w-full">
				<Circle bgColor="bg-subway-red" textColor="text-white">
					M
				</Circle>
				<Circle bgColor="bg-subway-yellow" textColor="text-white">
					D
				</Circle>
				<Circle bgColor="bg-subway-green" textColor="text-white">
					H
				</Circle>
				<Circle bgColor="bg-subway-blue" textColor="text-white">
					M
				</Circle>
				<Circle bgColor="bg-subway-purple" textColor="text-white">
					S
				</Circle>
			</div>
		</div>
	);
}

function Circle({ bgColor, textColor, children }: { bgColor: string; textColor: string; children: React.ReactNode }) {
	return (
		<div
			className={`w-1/6 aspect-square rounded-full flex items-center justify-center ${bgColor} ${textColor} text-3xl xs:text-5xl sm:text-6xl desktop:text-5xl lg:text-6xl 2xl:text-7xl font-bold shadow-lg`}
			suppressHydrationWarning
		>
			{children}
		</div>
	);
}
