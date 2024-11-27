import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SelectionOptionsComponent } from './selection-options/selection-options.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuAndCartService } from '../../../services/menu-cart/menu-and-cart.service';
import { baseUrl } from '../../../environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerBtnComponent } from '../../shared/spinner-btn/spinner-btn.component';
import { SharedLoadingComponent } from '../../shared/shared-loading/shared-loading.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    TranslateModule,
    SelectionOptionsComponent,
    MatInputModule,
    MatIconModule,
    RouterLink,
    MatCheckboxModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SpinnerBtnComponent,
    SharedLoadingComponent,
  ],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  selectedOption = 0;
  product!: any;
  selectionOptions: any = [];
  productNumber: number = 1;
  productID: number = 1;
  note: string = '';
  loadingBtn: boolean = false;
  Loader: boolean = false;
  defaultCount: number = 1;

  constructor(
    private menuAndCartService: MenuAndCartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productID = params['id'];
    });
    this.getJSON().subscribe(data => {
      this.product = data.data
    })
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      this.getProductData();
    }, 1000);
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/dummyData/porducts.json");
  }



  getProductData() {
    this.Loader = true;
    const id = this.productID;
    this.product = this.product.filter((item: any) =>
      item.ProductId == id
    );
    this.selectionOptions = [
      { "name": "small", "price": 123.5 },
      { "name": "meidum", "price": 153.5 },
    ]
    this.Loader = false;
  }
  selectedSizes($event: any) {
    this.selectedOption = $event;
  }
  // change the count of items selected 
  changeCount(count: string) {
    if (count == 'decrement' && this.defaultCount >= 1) {
      this.defaultCount--
    }
    else if (count == 'increment') {
      this.defaultCount++
    }
  }
  submit() {

    let item = {
      ProductName: this.product[0].ProductName,
      ProductPrice: this.product[0].ProductPrice,
      ProductImg: this.product[0].ProductImg,
      quantity: this.defaultCount
    }
    const existingData = localStorage.getItem('cartItems');
    let itemsArray: any[] = [];

    if (existingData) {
      try {
        itemsArray = JSON.parse(existingData);
        if (!Array.isArray(itemsArray)) {
          itemsArray = []; 
        }
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
        itemsArray = [];
      }
    }
    itemsArray.push(item);
    localStorage.setItem('cartItems', JSON.stringify(itemsArray));
    this.router.navigateByUrl('home');
  }

}
