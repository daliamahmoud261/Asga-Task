import { Component, Input } from '@angular/core';
import { products } from '../../models/products.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-selected-items-card',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './selected-items-card.component.html',
})
export class SelectedItemsCardComponent {
  @Input() products:products[]=[]

}
