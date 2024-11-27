import { Component } from '@angular/core';
import { products } from '../../models/products.model';
import { SelectedItemsCardComponent } from '../selected-items-card/selected-items-card.component';

@Component({
  selector: 'app-items-section',
  standalone: true,
  imports: [SelectedItemsCardComponent],
  templateUrl: './items-section.component.html',
})
export class ItemsSectionComponent {
  products: products[] = [
    // {
    //   photo: 'assets/photos/prod.svg',
    //   name: 'double cheese meat',
    //   menu_item_variant: '233 EGP',
    //   id
    // },
    // {
    //   photo: 'assets/photos/prod.svg',
    //   name: 'double cheese meat',
    //   menu_item_variant: '233 EGP',
    // },
    // {
    //   photo: 'assets/photos/prod.svg',
    //   name: 'double cheese meat',
    //   menu_item_variant: '233 EGP',
    // },
    // {
    //   photo: 'assets/photos/prod.svg',
    //   name: 'double cheese meat',
    //   menu_item_variant: '233 EGP',
    // },
    // {
    //   photo: 'assets/photos/prod.svg',
    //   name: 'double cheese meat',
    //   menu_item_variant: '233 EGP',
    // },
    // {
    //   photo: 'assets/photos/prod.svg',
    //   name: 'double cheese meat',
    //   menu_item_variant: '233 EGP',
    // },
    // {
    //   photo: 'assets/photos/prod.svg',
    //   name: 'double cheese meat',
    //   menu_item_variant: '233 EGP',
    // },
    // {
    //   photo: 'assets/photos/prod.svg',
    //   name: 'double cheese meat',
    //   menu_item_variant: '233 EGP',
    // },
    // {
    //   photo: 'assets/photos/prod.svg',
    //   name: 'double cheese meat',
    //   menu_item_variant: '233 EGP',
    // },
  ];
}
