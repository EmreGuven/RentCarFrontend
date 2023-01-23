import { Color } from 'src/app/models/color';
import { ColorService } from './../../services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  colorFilter: number = 0;
  brandFilter: number = 0;
  carData: any;

  constructor(
    public carService: CarService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    public brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.brandFilter == params['brandId'];
        this.colorFilter == params['colorId'];
        this.getCarsByBrandAndColor(params['brandId'], params['colorId']);
      } else if (params['brandid']) {
        this.getCarsByBrandId(params['brandid']);
      } else if (params['colorid']) {
        this.getCarsByColorId(params['colorid']);
      } else {
        this.getCars();
      }
    });
    this.getBrands();
    this.getColors();
  }

  /* getLocalStorage(){
    this.carService.getCars().subscribe(data=>{
      localStorage.setItem("datas",JSON.stringify(data))
      let datas = JSON.parse(localStorage.getItem("datas"))
      console.log(datas);
      
    })
  } */

  getCarBrandName(id) {
    this.carService.getCarWithBrandName(id).subscribe((data) => {
      this.carData = data;
    });
    return this.carData;
  }

  getCarsByBrandAndColor(brandId: number, colorId: number) {
    this.carService.getByBrandAndColor(brandId, colorId).subscribe((data) => {
      this.cars = data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((data) => {
      this.colors = data;
    });
  }

  getCars() {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
      this.getCarBrandName(1);
    });
  }

  getCarsByBrandId(brandid) {
    this.carService.getCarsByBrandId(brandid).subscribe((data) => {
      this.cars = data;
    });
  }

  getCarsByColorId(colorid: number) {
    this.carService.getCarsColorId(colorid).subscribe((data) => {
      this.cars = data;
    });
  }

  selectedColor(colorId: number) {
    if (this.colorFilter == colorId) {
      return true;
    } else {
      return false;
    }
  }

  selectedBrand(brandId: number) {
    if (this.brandFilter == brandId) {
      return true;
    } else {
      return false;
    }
  }
}
