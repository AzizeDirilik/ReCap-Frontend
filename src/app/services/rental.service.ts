import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44329/api/rentals/getall';

  constructor(private httpclient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpclient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
