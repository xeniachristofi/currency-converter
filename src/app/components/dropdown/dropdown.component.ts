import { Component, input } from '@angular/core';
import { IDropdownOption } from '../../models/dropdown-option';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  elementId = input('elementId');
  label = input('');

  options: IDropdownOption[] = [
    { key: 'USD', value: 'United States Dollar' },
    { key: 'EUR', value: 'Euro' },
    { key: 'JPY', value: 'Japanese Yen' },
    { key: 'GBP', value: 'British Pound Sterling' },
    { key: 'AUD', value: 'Australian Dollar' },
    { key: 'CAD', value: 'Canadian Dollar' },
    { key: 'CHF', value: 'Swiss Franc' },
    { key: 'CNY', value: 'Chinese Yuan Renminbi' },
    { key: 'SEK', value: 'Swedish Krona' },
    { key: 'NZD', value: 'New Zealand Dollar' }
  ];

}
