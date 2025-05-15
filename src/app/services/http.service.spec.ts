import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CurrencyService } from './currency.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient(withInterceptorsFromDi()) ]});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
