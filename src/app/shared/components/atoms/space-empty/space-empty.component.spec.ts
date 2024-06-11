import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceEmptyComponent } from './space-empty.component';

describe('SpaceEmptyComponent', () => {
  let component: SpaceEmptyComponent;
  let fixture: ComponentFixture<SpaceEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceEmptyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaceEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
