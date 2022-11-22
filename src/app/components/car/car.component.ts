import { BrandService } from 'src/app/services/brand.service';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toasterService: ToastrService,
    private brandService:BrandService
    
  ) {}
  
  ngOnInit(): void {
    this.getBrands();

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandid']) {
        this.getCarsBrandId(params['brandid']);
      } else {
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

  deleteCar(id:any){
    this.carService.deleteCar(id).subscribe(()=>{
      this.ngOnInit();
      this.toasterService.success("Silme İşlemi Gerçekleşti", "Tebrikler (:")
    })
    
  }
}
