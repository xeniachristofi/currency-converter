import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpService } from './services/http.service';
import { InputType, TextBoxComponent } from "./components/text-box/text-box.component";

@Component({
  selector: 'app-root',
  imports: [DropdownComponent, ButtonComponent, TextBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Currency Converter';
  result?: string;
  inputType = InputType;
  private httpService = inject(HttpService);

  public convert() {
    // Logic to convert currency
    console.log('Convert button clicked');
    this.result = '2';
  }
}
