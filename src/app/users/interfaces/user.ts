import { Vaccination } from "../../vaccination/interfaces/vaccination";

export interface User {
    id: number;
    name: string;
    email: string;

    vaccinations?: Vaccination[]; 
}
