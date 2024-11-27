import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerBtnComponent } from './spinner-btn.component';

describe('SpinnerBtnComponent', () => {
  let component: SpinnerBtnComponent;
  let fixture: ComponentFixture<SpinnerBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpinnerBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
