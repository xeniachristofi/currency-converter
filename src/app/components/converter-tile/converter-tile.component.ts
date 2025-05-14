import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { InputType, TextBoxComponent } from '../text-box/text-box.component';
import { ButtonComponent } from '../button/button.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControlPipe } from "../../pipes/form-control.pipe";

@Component({
  selector: 'app-converter-tile',
  imports: [ButtonComponent, TextBoxComponent, DropdownComponent, ReactiveFormsModule, FormControlPipe],
  templateUrl: './converter-tile.component.html',
  styleUrl: './converter-tile.component.scss'
})
export class ConverterTileComponent {
  result?: string;
  inputType = InputType;
  private httpService = inject(HttpService);
  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    amount: this.formBuilder.control('1.00'),
    fromCurrency: this.formBuilder.control('USD'),
    toCurrency: this.formBuilder.control('EUR')
  });

  public convert() {
    const convertedAmount = this.httpService.get('convert?to=' + this.form.value.toCurrency + '&from=' + this.form.value.fromCurrency + '&amount=' + this.form.value.amount);
    convertedAmount.subscribe((data: any) => {
      this.result = data;
    });
  }
}
