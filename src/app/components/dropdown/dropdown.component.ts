import { Component, computed, effect, inject, input, output } from '@angular/core';
import { IDropdownOption } from '../../models/dropdown-option';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';
import { take } from 'rxjs';
import { Currency } from '../../models/currency';

@Component({
  selector: 'app-dropdown',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  elementId = input('elementId');
  label = input('');
  form = input<UntypedFormControl>(new UntypedFormControl(''));
  formValue = computed(() => this.form().value);
  options = input<IDropdownOption[]>([]);

  valueChange = output();

  constructor() {
  }
}
