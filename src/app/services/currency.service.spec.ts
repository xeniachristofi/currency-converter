import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CurrencyService', () => {
  let service: CurrencyService;
  let http: HttpService;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient(withInterceptorsFromDi()), CurrencyService, HttpService ]});
    service = TestBed.inject(CurrencyService);
    http = TestBed.inject(HttpService);
    spy = spyOn(http, 'get').and.returnValue(of({}));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCurrencies', () => {
    it('should call HTTP service with correct parameters', () => {
      service.getCurrencies();
      expect(spy).toHaveBeenCalledWith('list');
    });
  });
  describe('convertCurrency', () => {
    it('should call HTTP service with correct parameters', () => {
      service.convertCurrency('EUR', 'USD', '100');
      expect(spy).toHaveBeenCalledWith('convert?to=EUR&from=USD&amount=100');
    });
  })
});
