import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarImgComponent } from './nav-bar-img.component';

describe('NavBarImgComponent', () => {
  let component: NavBarImgComponent;
  let fixture: ComponentFixture<NavBarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
