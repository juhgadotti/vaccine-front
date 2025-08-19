import { environment } from "./environment";

export const VaccineApi = {
    urls: {
        vaccine: {
            root: `${environment.baseServerUrl}/api/Vaccine`,
        },
        user: {
            root: `${environment.baseServerUrl}/api/User`,
            list: `${environment.baseServerUrl}/api/User/list`            
        },
        vaccination: {
            root: `${environment.baseServerUrl}/api/Vaccination`
        }
    }
}