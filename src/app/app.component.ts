import { Component } from '@angular/core';
import { ConverterTileComponent } from './components/converter-tile/converter-tile.component';

@Component({
  selector: 'app-root',
  imports: [ConverterTileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'Currency Converter';
 
}
