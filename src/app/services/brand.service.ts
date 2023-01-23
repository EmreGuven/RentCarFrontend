import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'http://localhost:3000/brands';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }

  addBrand(brand: Brand) {
    return this.httpClient.post(this.apiUrl, brand);
  }

  updateBrand(brand: Brand): Observable<Brand> {
    return this.httpClient.post<Brand>(this.apiUrl, brand);
  }

  getBrandById(brandId: number): Observable<Brand> {
    return this.httpClient.get<Brand>(this.apiUrl + '?brandId=' + brandId);
  }
}
