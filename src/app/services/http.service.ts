import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private static BASE_URL = 'https://currencyconverterapi-fjbjdzgndrh0h0e5.canadacentral-01.azurewebsites.net/';
  private http = inject(HttpClient);

  constructor() { }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${HttpService.BASE_URL}${url}`);
  }
}
