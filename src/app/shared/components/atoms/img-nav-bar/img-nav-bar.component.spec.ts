import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgNavBarComponent } from './img-nav-bar.component';

describe('ImgNavBarComponent', () => {
  let component: ImgNavBarComponent;
  let fixture: ComponentFixture<ImgNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
