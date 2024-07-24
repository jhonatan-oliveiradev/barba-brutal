import { SLOT_TIME } from "../constants";
import SchedulingRepository from "./ScheduleRepository";

export default class GetBusySchedules {
	constructor(private readonly repo: SchedulingRepository) {}

	async execute(professionalId: number, date: Date): Promise<string[]> {
		const schedules = await this.repo.searchByProfessionalAndDate(
			professionalId,
			date
		);
		const data = schedules
			.map((schedule) => {
				return {
					data: schedule.date,
					slots: schedule.services.reduce(
						(total, s) => total + s.slotsQuantity,
						0
					)
				};
			})
			.reduce((busySchedules: Date[], data: any) => {
				const schedule = data.data;
				const slots = data.slots;
				const schedules = Array.from({ length: slots }, (_, i) =>
					this.sumMinutes(schedule, i * SLOT_TIME)
				);
				return [...busySchedules, ...schedules];
			}, [])
			.map((d) => d.toTimeString().slice(0, 5));

		return data; // [ '10:00', '10:15', '10:30', '10:45', '14:15' ]
	}

	private sumMinutes(date: Date, minutes: number): Date {
		return new Date(date.getTime() + minutes * 60000);
	}
}
