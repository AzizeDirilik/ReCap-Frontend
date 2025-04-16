import { Component } from '@angular/core';
import { Rental } from '../../models/rental/rental';
import { RentalService } from '../../services/rental.service';

@Component({
  selector: 'app-rental',
  standalone: false,
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css',
})
export class RentalComponent {
  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
}
