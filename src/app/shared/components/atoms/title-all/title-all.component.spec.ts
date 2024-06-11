import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAllComponent } from './title-all.component';

describe('TitleAllComponent', () => {
  let component: TitleAllComponent;
  let fixture: ComponentFixture<TitleAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
