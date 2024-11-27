import { Component, EventEmitter, Input, Output } from '@angular/core';
import { category, categoryItem } from '../../models/categories.model';
import { Router } from '@angular/router';
import { baseUrl } from '../../../environment';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
})
export class CategoryCardComponent {
  @Input() categories: categoryItem[] = [];
  @Output() categorySelected = new EventEmitter();
  baseUrl = baseUrl;
  changeCategorySelected(id: string) {
    this.categorySelected.emit(id);
  }
}
