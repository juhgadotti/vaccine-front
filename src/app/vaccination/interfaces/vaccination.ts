import { Vaccine } from "../../vaccine/interfaces/vaccine";
import { User } from "../../users/interfaces/user";

export interface Vaccination {
  id: number;
  vaccineId: number;
  dose: number;
  dateApplied: string;
  userId?: number;  

  user: User;            
  vaccine: Vaccine;
}