import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { Car } from '../../models/car/car';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../../models/car/carResponseModel';
import { response } from 'express';

@Component({
  selector: 'app-car',
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];

  apiUrl = 'https://localhost:44329/api/cars/getall';
  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.httpclient.get<CarResponseModel>(this.apiUrl).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
