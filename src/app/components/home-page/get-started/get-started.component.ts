import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [CommonModule,MatIconModule,RouterLink,TranslateModule],
  templateUrl: './get-started.component.html',
})
export class GetStartedComponent {

}
