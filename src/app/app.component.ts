import { Component } from '@angular/core';
import { ConverterTileComponent } from './components/converter-tile/converter-tile.component';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  imports: [ConverterTileComponent],
  providers: [HttpService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'Currency Converter';
 
}
