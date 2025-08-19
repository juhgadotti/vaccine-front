import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Vaccine } from '../interfaces/vaccine';
import { VaccineApi } from '../../environments.ts/path';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VaccineService {

  constructor(private router: Router, private http: HttpClient ) { }

    private urls = VaccineApi.urls;

    registerNewVaccine(vaccine: Vaccine): Observable<Vaccine>{
      return this.http.post<Vaccine>(this.urls.vaccine.root, vaccine);
    }

    listVaccines(): Observable<Vaccine[]> {
      return this.http.get<Vaccine[]>(this.urls.vaccine.root);
    }

}
