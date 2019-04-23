import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { MessageService } from './message.service';
import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ActiveOrderService {

  private catalogUrl = 'api/activeOrder';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


    getCountItems() {
      const timestamp = Date.now();
      const url = window["BASE_URL"] + 'storefrontapi/cart/itemscount?t='+timestamp;
      return this.http.get<any>(url);
  }
  
}