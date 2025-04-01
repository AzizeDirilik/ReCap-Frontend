import { Component } from '@angular/core';
import { Rental } from '../../models/rental/rental';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from '../../models/rental/rentalResponseModel';

@Component({
  selector: 'app-rental',
  standalone: false,
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css',
})
export class RentalComponent {
  rentals: Rental[] = [];

  apiUrl = 'https://localhost:44329/api/rentals/getall';
  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.httpclient
      .get<RentalResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.rentals = response.data;
      });
  }
}
