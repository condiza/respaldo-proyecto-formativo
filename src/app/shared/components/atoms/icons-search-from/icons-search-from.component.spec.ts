import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSearchFromComponent } from './icons-search-from.component';

describe('IconsSearchFromComponent', () => {
  let component: IconsSearchFromComponent;
  let fixture: ComponentFixture<IconsSearchFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsSearchFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsSearchFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
