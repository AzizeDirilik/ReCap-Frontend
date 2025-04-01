import { Component } from '@angular/core';
import { Brand } from '../../models/brand/brand';
import { HttpClient } from '@angular/common/http';
import { BrandResponseModel } from '../../models/brand/brandResponseModel';

@Component({
  selector: 'app-brand',
  standalone: false,
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent {
  brands: Brand[] = [];

  apiUrl = 'https://localhost:44329/api/brands/getall';
  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.httpclient
      .get<BrandResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.brands = response.data;
      });
  }
}
