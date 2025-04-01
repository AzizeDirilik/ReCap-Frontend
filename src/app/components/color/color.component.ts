import { Component } from '@angular/core';
import { Color } from '../../models/color/color';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../../models/car/carResponseModel';
import { ColorResponseModel } from '../../models/color/colorResponseModel';

@Component({
  selector: 'app-color',
  standalone: false,
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent {
  colors: Color[] = [];

  apiUrl = 'https://localhost:44329/api/colors/getall';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.httpClient
      .get<ColorResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.colors = response.data;
      });
  }
}
