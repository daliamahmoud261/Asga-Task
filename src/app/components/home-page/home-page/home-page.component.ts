import { Component } from '@angular/core';
import { category, categoryItem } from '../../models/categories.model';
import { products } from '../../models/products.model';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuAndCartService } from '../../../services/menu-cart/menu-and-cart.service';
import { SharedLoadingComponent } from '../../shared/shared-loading/shared-loading.component';
import { BehaviorSubject, debounceTime, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ProductsCardComponent,
    CategoryCardComponent,
    MatInputModule,
    MatIconModule,
    TranslateModule,
    NavBarComponent,
    SharedLoadingComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  products: any;
  searchData:any = []
  Loader: boolean = false;
  searchKeyword = '';
  tempProd !: any
  constructor(
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) { }


  public getJSON(): Observable<any> {
    return this.http.get("./assets/dummyData/porducts.json");
  }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(id?: string | any) {
    this.Loader = true;
    this.getJSON().subscribe(data => {
      this.products = data.data
      this.tempProd=data.data;
      this.searchData = data.data
      this.Loader = false
    });

  }
  search() {
    const lowerCaseTerm = this.searchKeyword.toLowerCase();
    if (this.searchKeyword.length > 3) {
      this.products = [];
      this.products = this.searchData.filter((item:any) =>
        item.ProductName.toLowerCase().includes(lowerCaseTerm)
      );
    } else {
      this.products = [];
      this.products = this.tempProd;
    }
  }

}
