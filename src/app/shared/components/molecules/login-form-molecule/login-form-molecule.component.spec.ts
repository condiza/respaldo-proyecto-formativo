import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormMoleculeComponent } from './login-form-molecule.component';

describe('LoginFormMoleculeComponent', () => {
  let component: LoginFormMoleculeComponent;
  let fixture: ComponentFixture<LoginFormMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormMoleculeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginFormMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
