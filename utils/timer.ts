export type DeltaTime = {
	seconds: number;
	minutes: number;
	hours: number;
	days: number;
	months: number;
};

const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function calculateDeltaTime(currentTime: Date, endTime: Date): DeltaTime {
	if (currentTime.getTime() > endTime.getTime()) {
		return { seconds: 0, minutes: 0, hours: 0, days: 0, months: 0 };
	}

	let seconds = endTime.getSeconds() - currentTime.getSeconds();
	// We want to count down from 59 seconds to 0 seconds
	// So we add 59 to the seconds
	seconds += 59;

	let minutes = endTime.getMinutes() - currentTime.getMinutes();
	// We want to count down from 59 minutes to 0 minutes
	// So we add 59 to the minutes
	minutes += 59;

	let hours = endTime.getHours() - currentTime.getHours();
	// We want to count down from 23 hours to 0 hours
	// So we add 23 to the hours if the hours are less than 0
	if (hours <= 0) {
		hours += 23;
	} else {
		// We need to subtract 1 from the hours to account for the minutes counting down from 59
		hours -= 1;
	}

	let days = endTime.getDate() - currentTime.getDate();
	// We want the days to count down from the number of days in the month to 0
	// So we add the number of days in the month to the days
	if (days <= 0) {
		days += daysInMonths[currentTime.getMonth()];
	}

	// If the hours are <= 0 then we need to subtract 1 from the days
	if (endTime.getHours() - currentTime.getHours() <= 0) {
		days -= 1;
	}

	let months = endTime.getMonth() - currentTime.getMonth();
	// If the days difference is negative then we need to subtract 1 from the months
	if (endTime.getDate() - currentTime.getDate() < 0) {
		months -= 1;
	}

	return { seconds, minutes, hours, days, months };
}
