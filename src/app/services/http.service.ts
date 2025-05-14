import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient);

  constructor() { }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
