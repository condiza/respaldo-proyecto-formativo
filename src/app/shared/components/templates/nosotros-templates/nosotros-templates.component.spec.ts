import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosTemplatesComponent } from './nosotros-templates.component';

describe('NosotrosTemplatesComponent', () => {
  let component: NosotrosTemplatesComponent;
  let fixture: ComponentFixture<NosotrosTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NosotrosTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosotrosTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
