import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44329/api/cars/getall';

  constructor(private httpclient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpclient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}
