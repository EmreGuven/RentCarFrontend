import { Car } from 'src/app/models/car';
import { Color } from './../models/color';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'http://localhost:3000/colors';

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<Color[]>{
    return this.httpClient.get<Color[]>(this.apiUrl);
  }

  getColorsById(colorid:number):Observable<Color>{
    return this.httpClient.get<Color>(this.apiUrl+"/"+colorid)
  }
}
