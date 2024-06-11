import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCartsComponent } from './title-carts.component';

describe('TitleCartsComponent', () => {
  let component: TitleCartsComponent;
  let fixture: ComponentFixture<TitleCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleCartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
