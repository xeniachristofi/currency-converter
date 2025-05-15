import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private httpService = inject(HttpService);

  constructor() { }

  public getCurrencies(): Observable<Currency[]> {
    return this.httpService.get<Currency[]>('list');
  }

  public convertCurrency(to: string, from: string, amount: string): Observable<number> {
    return this.httpService.get<number>(`convert?to=${to}&from=${from}&amount=${amount}`);
  }

}
