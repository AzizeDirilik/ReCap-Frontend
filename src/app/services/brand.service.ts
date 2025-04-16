import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44329/api/brands/getall';
  constructor(private httpclient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpclient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
