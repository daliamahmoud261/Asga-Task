import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedItemsCardComponent } from './selected-items-card.component';

describe('SelectedItemsCardComponent', () => {
  let component: SelectedItemsCardComponent;
  let fixture: ComponentFixture<SelectedItemsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedItemsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedItemsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
