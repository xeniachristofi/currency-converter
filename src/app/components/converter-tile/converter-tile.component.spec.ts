import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterTileComponent } from './converter-tile.component';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

describe('ConverterTileComponent', () => {
  let component: ConverterTileComponent;
  let fixture: ComponentFixture<ConverterTileComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ConverterTileComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), HttpService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
