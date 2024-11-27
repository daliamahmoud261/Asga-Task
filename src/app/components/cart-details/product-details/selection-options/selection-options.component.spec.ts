import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionOptionsComponent } from './selection-options.component';

describe('SelectionOptionsComponent', () => {
  let component: SelectionOptionsComponent;
  let fixture: ComponentFixture<SelectionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
