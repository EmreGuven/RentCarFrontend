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
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private colorService:ColorService,
    private brandService:BrandService
    
  ) {}
  
  ngOnInit(): void {
    this.getBrands();

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandid']) {
        this.getCarsBrandId(params['brandid']);
      } 
      else if(params['colorid']){
        this.getCarsByColorId(params['colorid'])
      }
      else {
        this.getCars();
      }
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe((data)=>{
      this.brands=data
      //console.log(data);
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
  
}
