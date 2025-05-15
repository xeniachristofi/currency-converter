import { Component, inject } from '@angular/core';
import { InputType, TextBoxComponent } from '../text-box/text-box.component';
import { ButtonComponent } from '../button/button.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControlPipe } from "../../pipes/form-control.pipe";
import { CurrencyService } from '../../services/currency.service';
import { IDropdownOption } from '../../models/dropdown-option';
import { take } from 'rxjs';
import { Currency } from '../../models/currency';

@Component({
  selector: 'app-converter-tile',
  imports: [ButtonComponent, TextBoxComponent, DropdownComponent, ReactiveFormsModule, FormControlPipe],
  templateUrl: './converter-tile.component.html',
  styleUrl: './converter-tile.component.scss'
})
export class ConverterTileComponent {

  result?: string;
  inputType = InputType;
  private currencyService = inject(CurrencyService);
  formBuilder = inject(FormBuilder);
  
  options: IDropdownOption[] = [];

  form = this.formBuilder.group({
    amount: this.formBuilder.control('1.00'),
    fromCurrency: this.formBuilder.control('USD'),
    toCurrency: this.formBuilder.control('EUR')
  });

  constructor() {
    this.currencyService.getCurrencies().pipe(take(1)).subscribe((data: Currency[]) => {
    this.options = data.map((currency: Currency) => {
      return {
        key: currency.code,
        value: currency.name
      }
    });
  })
  }

  public convert() {
    const convertedAmount = this.currencyService.convertCurrency(this.form.value.toCurrency ?? '', this.form.value.fromCurrency ?? '', this.form.value.amount ?? '1');
    convertedAmount.subscribe({
     next: (data: any) => {
      this.result = `${this.form.value.amount ?? ''} ${this.form.value.fromCurrency ?? ''} is ${data} ${this.form.value.toCurrency ?? ''}`;
    },
    error: (error: any) => {
      console.error('Error converting currency:', error);
      this.result = 'Error converting currency';
    }});
  }
}
