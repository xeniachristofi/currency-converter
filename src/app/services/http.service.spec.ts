import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CurrencyService } from './currency.service';
import { of } from 'rxjs';

describe('HttpService', () => {
  let service: HttpService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient(withInterceptorsFromDi()) ]});
    service = TestBed.inject(HttpService);
    httpClient = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get method with correct URL', () => {
    const url = 'test-url';
    const spy = spyOn(service, 'get').and.returnValue(of({}));

    service.get(url);

    expect(spy).toHaveBeenCalledWith(url);
  });
});
