import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterTileComponent } from './converter-tile.component';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { of, throwError } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';

describe('ConverterTileComponent', () => {
  let component: ConverterTileComponent;
  let fixture: ComponentFixture<ConverterTileComponent>;
  let currencyService: CurrencyService;
  let currencyServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ConverterTileComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), HttpService ]
    })
    .compileComponents();

    // Mock out calls to the API
    let http = TestBed.inject(HttpService);
    currencyService = TestBed.inject(CurrencyService);
    spyOn(http, 'get').and.returnValue(of({}));
    currencyServiceSpy = spyOn(currencyService, 'convertCurrency').and.returnValue(of(0));

    fixture = TestBed.createComponent(ConverterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('convert', () => {
    
  it('should set result with converted value on successful conversion', () => {
      component.form.setValue({ amount: '10', fromCurrency: 'USD', toCurrency: 'EUR' });
      currencyServiceSpy.and.returnValue(of(9.2));

      component.convert();

      expect(currencyServiceSpy).toHaveBeenCalledWith('EUR', 'USD', '10');
      expect(component.result).toBe('10 USD is 9.2 EUR');
    });

    it('should set result to error message on conversion error', () => {
      component.form.setValue({ amount: '10', fromCurrency: 'USD', toCurrency: 'EUR' });
      currencyServiceSpy.and.returnValue(throwError(() => new Error('Conversion failed')));
      spyOn(console, 'error');

      component.convert();

      expect(currencyServiceSpy).toHaveBeenCalledWith('EUR', 'USD', '10');
      expect(component.result).toBe('Error converting currency');
      expect(console.error).toHaveBeenCalledWith('Error converting currency:', jasmine.any(Error));
    });

    it('should use default values if form values are missing', () => {
      component.form.setValue({ amount: null, fromCurrency: null, toCurrency: null });
      currencyServiceSpy.and.returnValue(of(1));

      component.convert();

      expect(currencyServiceSpy).toHaveBeenCalledWith('', '', '1');
      expect(component.result).toBe('  is 1 ');
    });
  });

});
