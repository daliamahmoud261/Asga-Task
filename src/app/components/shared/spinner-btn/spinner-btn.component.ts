import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faSpinner } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-spinner-btn',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './spinner-btn.component.html',
})
export class SpinnerBtnComponent {
  faSpinner = faSpinner;

}
