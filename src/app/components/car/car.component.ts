import { Color } from 'src/app/models/color';
import { ColorService } from './../../services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { FormGroup } from '@angular/forms';
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
  brands:Brand[]=[];
  colors:Color[]=[];
  colorFilter:number=0;
  brandFilter:number=0;
  filterText:"";

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private colorService:ColorService,
    private brandService:BrandService
    
  ) {}
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {  
      if(params['brandId'] && params['colorId']){
        this.brandFilter == params['brandId'];
        this.brandFilter == params['colorId'];
        this.getByBrandAndColor(params['brandId'],params['colorId'])
      }
      else  if (params['brandid']) {
        this.getCarsBrandId(params['brandid']);
      } 
      else if(params['colorid']){
        this.getCarsByColorId(params['colorid'])
      }
      else {
        this.getCars();
      }
    });
    this.getBrands();
    this.getColors();
  }

  getByBrandAndColor(brandId:number,colorId:number){
    this.carService.getByBrandAndColor(brandId,colorId).subscribe((data)=>{
      this.cars = data
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe((data)=>{
      this.brands=data
      //console.log(data);
    })
  }
  getColors(){
    this.colorService.getColors().subscribe((data)=>{
      this.colors=data
    })
  }
  
  getCars() {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  getCarsBrandId(brandid) {
    this.carService.getCarsByBrandId(brandid).subscribe((data) => {
      this.cars = data;
    });
  }

  getCarsByColorId(colorid:number){
    this.carService.getCarsColorId(colorid).subscribe((data=>{
      this.cars = data
    }))
  }

  selectedColor(colorId:number){
    if(this.colorFilter==colorId){
      console.log(colorId);
      
      return true;
    } else{
      return false;
    }
  }

  selectedBrand(brandId:number){
    if(this.brandFilter==brandId){
      return true;
    } else{
      return false;
    }
  }
  
}
