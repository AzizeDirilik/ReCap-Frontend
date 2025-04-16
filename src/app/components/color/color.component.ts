import { Component } from '@angular/core';
import { Color } from '../../models/color/color';
import { HttpClient } from '@angular/common/http';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  standalone: false,
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent {
  colors: Color[] = [];

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
