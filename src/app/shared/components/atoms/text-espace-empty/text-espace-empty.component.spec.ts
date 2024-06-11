import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEspaceEmptyComponent } from './text-espace-empty.component';

describe('TextEspaceEmptyComponent', () => {
  let component: TextEspaceEmptyComponent;
  let fixture: ComponentFixture<TextEspaceEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextEspaceEmptyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextEspaceEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
