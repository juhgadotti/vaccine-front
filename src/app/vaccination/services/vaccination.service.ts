import { Injectable } from '@angular/core';
import { VaccineApi } from '../../environments.ts/path';
import { HttpClient } from '@angular/common/http';
import { NewVaccination } from '../interfaces/new-vaccination';
import { Observable } from 'rxjs';
import { VaccinationHistory } from '../interfaces/vaccination-history';
import { Vaccination } from '../interfaces/vaccination';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor(private http: HttpClient) { }

  private urls = VaccineApi.urls;

  registerNewVaccination(vaccination: NewVaccination): Observable<Vaccination> {
    return this.http.post<Vaccination>(this.urls.vaccination.root, vaccination)
  }

  delete(vaccinationId: number): Observable<void> {
    return this.http.delete<void>(`${this.urls.vaccination.root}/${vaccinationId}`);
  }

  getHistoryByUserId(userId: number): Observable<VaccinationHistory[]> {
      return this.http.get<VaccinationHistory[]>(`${this.urls.vaccination.root}/${userId}`);
    }
}
