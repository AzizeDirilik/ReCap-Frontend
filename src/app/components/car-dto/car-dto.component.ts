import { Component, OnInit } from '@angular/core';
import { CarDto } from '../../models/car-dto/carDto';
import { HttpClient } from '@angular/common/http';
import { CarDtoResponseModel } from '../../models/car-dto/carDtoResponseModel';

@Component({
  selector: 'app-car-dto',
  standalone: false,
  templateUrl: './car-dto.component.html',
  styleUrl: './car-dto.component.css',
})
export class CarDtoComponent implements OnInit {
  cars: CarDto[] = [];

  apiUrl = 'https://localhost:44329/api/cars/getcardetails';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCarsDto();
  }

  getCarsDto() {
    this.httpClient
      .get<CarDtoResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }
}
