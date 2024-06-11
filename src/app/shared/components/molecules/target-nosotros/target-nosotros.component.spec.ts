import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetNosotrosComponent } from './target-nosotros.component';

describe('TargetNosotrosComponent', () => {
  let component: TargetNosotrosComponent;
  let fixture: ComponentFixture<TargetNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TargetNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
