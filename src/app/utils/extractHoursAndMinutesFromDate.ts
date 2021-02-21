export function extractHoursAndMinutesFromDate (timestring: string): number[] {
	return [+timestring.slice(0, 2), +timestring.slice(-2)];
}