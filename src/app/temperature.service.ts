import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  private apiUrl = 'http://localhost:3000/update'; // Reemplaza con la IP o dominio de tu servidor si es necesario

  constructor(private http: HttpClient) { }

  getTemperature(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
