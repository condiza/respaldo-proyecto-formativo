import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePageComponentComponent } from './maintenance-page-component.component';

describe('MaintenancePageComponentComponent', () => {
  let component: MaintenancePageComponentComponent;
  let fixture: ComponentFixture<MaintenancePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenancePageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintenancePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
