import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSectinsComponent } from './title-sectins.component';

describe('TitleSectinsComponent', () => {
  let component: TitleSectinsComponent;
  let fixture: ComponentFixture<TitleSectinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleSectinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleSectinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
