import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsNosotrosComponent } from './icons-nosotros.component';

describe('IconsNosotrosComponent', () => {
  let component: IconsNosotrosComponent;
  let fixture: ComponentFixture<IconsNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
