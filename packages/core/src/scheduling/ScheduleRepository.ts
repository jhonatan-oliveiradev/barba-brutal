import Scheduling from "./Scheduling";

export default interface SchedulingRepository {
	create(scheduling: Scheduling): Promise<void>;
	searchByEmail(email: string): Promise<Scheduling[]>;
	searchByProfessionalAndDate(
		professional: number,
		date: Date
	): Promise<Scheduling[]>;
}
