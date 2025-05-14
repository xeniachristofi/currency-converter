import { Component, input, Signal } from '@angular/core';

export enum InputType {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  Password = 'password',
  Date = 'date',
  Time = 'time',
}

@Component({
  selector: 'app-text-box',
  imports: [],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.scss'
})
export class TextBoxComponent {

  
  elementId = input('elementId');
  label = input('');
  type = input<InputType>(InputType.Text);
}
