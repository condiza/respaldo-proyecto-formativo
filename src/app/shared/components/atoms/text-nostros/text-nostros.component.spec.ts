import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNostrosComponent } from './text-nostros.component';

describe('TextNostrosComponent', () => {
  let component: TextNostrosComponent;
  let fixture: ComponentFixture<TextNostrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextNostrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextNostrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
