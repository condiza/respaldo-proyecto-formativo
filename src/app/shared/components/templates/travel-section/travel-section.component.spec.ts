import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSectionComponent } from './travel-section.component';

describe('TravelSectionComponent', () => {
  let component: TravelSectionComponent;
  let fixture: ComponentFixture<TravelSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
