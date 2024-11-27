import { Injectable } from '@angular/core';
import { baseUrl } from '../../environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { category } from '../../components/models/categories.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuAndCartService {
  apiUrl = `${baseUrl}/api/`;
  cartItems=new BehaviorSubject('')
  constructor(private http: HttpClient) {}

  
}
