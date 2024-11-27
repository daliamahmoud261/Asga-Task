import { Component, Input } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-shared-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './shared-loading.component.html',
})
export class SharedLoadingComponent {
@Input() Loader=false
}
