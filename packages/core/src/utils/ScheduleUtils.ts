export default class ScheduleUtils {
	private static minutes = [0, 15, 30, 45];

	static timesOfTheDay() {
		return {
			morning: this.generateTimes([8, 9, 10, 11]),
			afternoon: this.generateTimes([14, 15, 16, 17]),
			night: this.generateTimes([18, 19, 20, 21])
		};
	}

	private static generateTimes(hours: number[]) {
		return hours.reduce((times, hours) => {
			const all = this.minutes.map((minute) => {
				return `${String(hours).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
			});
			return times.concat(all);
		}, [] as string[]);
	}
}
