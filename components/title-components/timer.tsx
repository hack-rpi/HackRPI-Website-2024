"use client";

import { useState, useEffect } from "react";

export default function Timer() {
	const [currentTime, setCurrentTime] = useState<Date>(new Date());
	const hackathonStart = new Date(2024, 10, 9, 12, 0, 0);
	const hackathonEnd = new Date(2024, 10, 10, 12, 0, 0);

	useEffect(() => {
		setCurrentTime(new Date());
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const dayOfMonthPassed = currentTime.getDate() >= hackathonStart.getDate();
	const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	let dayOffset = -1;
	let monthOffset = 0;
	if (dayOfMonthPassed) {
		dayOffset += daysInMonths[currentTime.getMonth()];
		monthOffset = -1;
	}

	const hackathonStarted = currentTime.getTime() > hackathonStart.getTime();
	const hackathonEnded = currentTime.getTime() > hackathonEnd.getTime();
	let secondDelta = hackathonStart.getSeconds() - currentTime.getSeconds() + 59;
	let minuteDelta = hackathonStart.getMinutes() - currentTime.getMinutes() + 59;
	let hourDelta = hackathonStart.getHours() - currentTime.getHours() + 23;
	let dayDelta = hackathonStart.getDate() - currentTime.getDate() + dayOffset;
	let monthDelta = hackathonStart.getMonth() - currentTime.getMonth() + monthOffset;

	if (hackathonStarted) {
		secondDelta = hackathonEnd.getSeconds() - currentTime.getSeconds() + 59;
		minuteDelta = hackathonEnd.getMinutes() - currentTime.getMinutes() + 59;
		hourDelta = hackathonEnd.getHours() - currentTime.getHours() - 1;
		dayDelta = hackathonEnd.getDate() - currentTime.getDate();
		monthDelta = hackathonEnd.getMonth() - currentTime.getMonth();
	}

	if (hackathonEnded) {
		secondDelta = 0;
		minuteDelta = 0;
		hourDelta = 0;
		dayDelta = 0;
		monthDelta = 0;
	}

	return (
		<div className="w-full h-fit flex flex-col items-start justify-center">
			{hackathonStarted && !hackathonEnded ? <h1 className="text-4xl font-bold mb-2">SUBMISSIONS DUE: </h1> : null}
			{hackathonEnded ? <h1 className="text-4xl font-bold mb-2">THANKS FOR JOINING US! </h1> : null}
			<div className="flex items-center justify-between w-full mb-4">
				<Circle bgColor="bg-[#ef3a42]" textColor="text-white">
					{monthDelta > 9 ? monthDelta : "0" + monthDelta}
				</Circle>
				<Circle bgColor="bg-[#f8a13a]" textColor="text-white">
					{dayDelta > 9 ? dayDelta : "0" + dayDelta}
				</Circle>
				<Circle bgColor="bg-[#00a65c]" textColor="text-white">
					{hourDelta > 9 ? hourDelta : "0" + hourDelta}
				</Circle>
				<Circle bgColor="bg-[#0058a9]" textColor="text-white">
					{minuteDelta > 9 ? minuteDelta : "0" + minuteDelta}
				</Circle>
				<Circle bgColor="bg-[#b43c96]" textColor="text-white">
					{secondDelta > 9 ? secondDelta : "0" + secondDelta}
				</Circle>
			</div>
			<div className="flex items-center justify-between w-full">
				<Circle bgColor="bg-[#ef3a42]" textColor="text-white">
					M
				</Circle>
				<Circle bgColor="bg-[#f8a13a]" textColor="text-white">
					D
				</Circle>
				<Circle bgColor="bg-[#00a65c]" textColor="text-white">
					H
				</Circle>
				<Circle bgColor="bg-[#0058a9]" textColor="text-white">
					M
				</Circle>
				<Circle bgColor="bg-[#b43c96]" textColor="text-white">
					S
				</Circle>
			</div>
		</div>
	);
}

function Circle({ bgColor, textColor, children }: { bgColor: string; textColor: string; children: React.ReactNode }) {
	return (
		<div
			className={`w-1/6 aspect-square rounded-full flex items-center justify-center ${bgColor} ${textColor} text-3xl xs:text-5xl sm:text-6xl desktop:text-5xl lg:text-6xl xl:text-7xl font-bold shadow-lg`}
			suppressHydrationWarning
		>
			{children}
		</div>
	);
}
