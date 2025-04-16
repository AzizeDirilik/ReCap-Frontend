import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDto } from '../models/car-dto/carDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarDtoService {
  apiUrl = 'https://localhost:44329/api/cars/getcardetails';
  constructor(private httpClient: HttpClient) {}

  getCarsDto(): Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl);
  }
}
