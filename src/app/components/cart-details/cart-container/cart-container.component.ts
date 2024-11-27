import { Component } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [CartItemComponent,FormsModule,MatIconModule,RouterLink,TranslateModule],
  templateUrl: './cart-container.component.html',
})
export class CartContainerComponent {
  products = []
  constructor(private router:Router,
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    localStorage.setItem('currentPage','cart-item')

  }

}
