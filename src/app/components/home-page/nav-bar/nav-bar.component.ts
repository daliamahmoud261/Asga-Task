import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarCloseAnimation, SidebarOpenAnimation } from '../animations';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';
import { MenuAndCartService } from '../../../services/menu-cart/menu-and-cart.service';
import { MatBadgeModule } from '@angular/material/badge';

const animationParams = {
  menuWidth: '250px',
  animationStyle: '500ms ease',
};
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    RouterLink,
    TranslateModule,
    MatBadgeModule,
  ],
  templateUrl: './nav-bar.component.html',
  animations: [
    trigger('sideMenu', [
      transition(':enter', [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
      transition(':leave', [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
    ]),
  ],
})
export class NavBarComponent {
  isOpen = false;
  items: any = [];
  location: any = 'Misr El gdida';
  isEnglish = localStorage.getItem('language') == 'en';
  language: string = localStorage.getItem('language') ?? '';
  cartItems!:any
  constructor(
    private translationService: TranslateService,
    private router: Router,
    private menuAndCartService: MenuAndCartService,
  ) {}
  switchLanguage(language: string) {
    this.translationService.use(language);
    this.isEnglish = !this.isEnglish;
    if (localStorage.getItem('language') == 'en') {
      document.getElementById('body')?.setAttribute('dir', 'rtl');
      localStorage.setItem('language', 'ar');
      this.language = localStorage.getItem('language') ?? '';
    } else {
      document.getElementById('body')?.setAttribute('dir', 'ltr');
      localStorage.setItem('language', 'en');
      this.language = localStorage.getItem('language') ?? '';
    }
  }
  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('cartItems')??'');    
    this.menuAndCartService.cartItems.next(this.items);
  }
  goToCart() {

  }
  cartRedirection() {
    this.router.navigateByUrl('cart');
  }
 
}
