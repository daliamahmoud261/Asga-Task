import { Component, EventEmitter, Output } from '@angular/core';
import { MenuAndCartService } from '../../../../services/menu-cart/menu-and-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { baseUrl } from '../../../../environment';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Output() deleteItem = new EventEmitter();
  carts!: any;
  baseUrl=baseUrl
  deleteItemID: any;
  constructor(
    private menuAndCartService: MenuAndCartService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.menuAndCartService.cartItems.pipe().subscribe({
      next: (res:any) => {
        if (res) {          
          this.carts = res;
        }
      },
    });
  }

  deleteItemFromCart(id: any, index:number) {
    // this.menuAndCartService.deleteItemFromCart(id).subscribe({
    //   next: () => {
    //    this.carts.splice(index,1)
    //   },
    //   error: (err) => {
    //     this.openSnackBar(err?.error?.message);
    //   },
    // });
  }
  editQty(val: string, index: number, id: string) {
    if (val == 'increment') {
      this.carts[index].quantity++;
    } else {
      if (this.carts[index].quantity > 0) {
        this.carts[index].quantity--;
      }
    }
    // this.menuAndCartService
    //   .editQuantity(id, this.carts[index].quantity)
    //   .subscribe({
    //     next: () => {
          
    //     },
    //     error: (err) => {
    //       this.openSnackBar(err?.error?.message)
    //     },
    //   });
  }
 
}
