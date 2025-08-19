import { Vaccination } from "./vaccination";

export interface VaccinationHistory {
    vaccineId: number;
    name: string;
    totalDoses: number;
    doses: Vaccination[];
}