import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44329/api/colors/getall';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
