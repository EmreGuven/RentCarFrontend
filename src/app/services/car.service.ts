import { environment } from './../../environments/environment';
import { CarDetail } from './../models/car-detail';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl+'?state=1');
  }

  getCarsByBrandId(brandid): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl + '?brandId=' + brandid);
  }

  getCarsColorId(colorid): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl + '?colorId=' + colorid);
  }

  getCarById(carid:number):Observable<Car>{
    return this.httpClient.get<Car>(this.apiUrl+ '/' + carid);
  }

  getByBrandAndColor(brandId:number,colorId):Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.apiUrl+"?brandId="+brandId+"&colorId="+colorId)
  }

  getCarDetail(carid): Observable<CarDetail> {
    return this.httpClient.get<CarDetail>(this.apiUrl + '/' + carid);
  }

  addCar(car: Car) {
    return this.httpClient.post(this.apiUrl, car);
  }

  updateCar(id:number,data:any){
    return this.httpClient.put(this.apiUrl+'/'+id,data)
  }

  deleteCar(id:any){
    
    return this.httpClient.delete(this.apiUrl+'/'+id)
  }
}
