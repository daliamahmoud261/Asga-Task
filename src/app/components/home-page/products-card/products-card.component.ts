import { Component, Input } from '@angular/core';
import { products } from '../../models/products.model';
import { baseUrl } from '../../../environment';
import { Router } from '@angular/router';
import { MenuAndCartService } from '../../../services/menu-cart/menu-and-cart.service';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [],
  templateUrl: './products-card.component.html',
})
export class ProductsCardComponent {
  @Input() products:products[]=[]
  baseUrl=baseUrl
  constructor(
   private router:Router, private menuAndCartService:MenuAndCartService
  ) {}
  goToProdDetails(product:products){
    this.router.navigateByUrl('/product-details/'+product.ProductId)
  }
}
