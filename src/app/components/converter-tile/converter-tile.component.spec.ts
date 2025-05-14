import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterTileComponent } from './converter-tile.component';

describe('ConverterTileComponent', () => {
  let component: ConverterTileComponent;
  let fixture: ComponentFixture<ConverterTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverterTileComponent]
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
