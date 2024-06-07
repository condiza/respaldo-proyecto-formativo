import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationNavBarComponent } from './navigation-nav-bar.component';

describe('NavigationNavBarComponent', () => {
  let component: NavigationNavBarComponent;
  let fixture: ComponentFixture<NavigationNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
