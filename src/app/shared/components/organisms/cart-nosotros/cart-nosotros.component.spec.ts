import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartNosotrosComponent } from './cart-nosotros.component';

describe('CartNosotrosComponent', () => {
  let component: CartNosotrosComponent;
  let fixture: ComponentFixture<CartNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
