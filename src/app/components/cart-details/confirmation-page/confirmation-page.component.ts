import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MenuAndCartService } from '../../../services/menu-cart/menu-and-cart.service';
import { SharedLoadingComponent } from '../../shared/shared-loading/shared-loading.component';
import { SpinnerBtnComponent } from '../../shared/spinner-btn/spinner-btn.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [
    TranslateModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    MatRadioModule,
    FormsModule,
    RouterLink,
    SharedLoadingComponent,
    SpinnerBtnComponent
  ],
  templateUrl: './confirmation-page.component.html',
})
export class ConfirmationPageComponent {
  paymentMethod!: string;
  items: any = [];
  totalOrder: any=0;
  Loader: boolean = false;
  spinnerLoader: boolean = false;
  location: any = 'Misr El gdida';
  orderID: number = 0;
  constructor(
   private _snackBar: MatSnackBar,
    private menuAndCartService: MenuAndCartService, private router :Router
  ) {}
  ngOnInit(): void {
    this.items= JSON.parse(localStorage.getItem('cartItems')??'');  
    if (localStorage.getItem('newSelectedLocation')) {
      this.location = JSON.parse(
        localStorage.getItem('newSelectedLocation') ?? ''
      );
    } 
    this.items.forEach((element:any) => {
      this.totalOrder =this.totalOrder+ element?.ProductPrice;
      
    });
  }

 
}
