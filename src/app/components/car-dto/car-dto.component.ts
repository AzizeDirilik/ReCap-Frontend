import { Component, OnInit } from '@angular/core';
import { CarDto } from '../../models/car-dto/carDto';
import { CarDtoService } from '../../services/car-dto.service';

@Component({
  selector: 'app-car-dto',
  standalone: false,
  templateUrl: './car-dto.component.html',
  styleUrl: './car-dto.component.css',
})
export class CarDtoComponent implements OnInit {
  cars: CarDto[] = [];
  dataLoaded = false;

  constructor(private carDtoService: CarDtoService) {}

  ngOnInit(): void {
    this.getCarsDto();
  }

  getCarsDto() {
    this.carDtoService.getCarsDto().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
