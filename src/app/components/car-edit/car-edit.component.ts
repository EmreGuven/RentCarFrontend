import { BrandService } from 'src/app/services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from './../../models/brand';
import { Car } from './../../models/car';
import { CarService } from './../../services/car.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {

  carEditForm: FormGroup;
  car:Car
  brands:Brand[];

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toasterService: ToastrService,
    private activatedRoute:ActivatedRoute,
    private location:Location,
    private brandService:BrandService
  ) {}

  ngOnInit(): void {
    this.getBrands()
    this.getCarDataForm()
    this.createCarEditForm();

  }
  getCarById(carid:number){
    this.carService.getCarById(carid).subscribe((data)=>{
      this.car=data
    })
  }

  updateCar(){
    console.log(this.carEditForm.value);
    this.carService.updateCar(this.activatedRoute.snapshot.params["id"],this.carEditForm.value)
    .subscribe(()=>{
      this.toasterService.success("Araç Bilgileri Güncellendi", "Tebrikler (:")
      this.location.back();
      
    })
  }

  createCarEditForm() {
    this.carEditForm = this.formBuilder.group({
      carName: [null, Validators.required],
      brandId: [null, Validators.required],
      description: [null, Validators.required],
      plate: [null, Validators.required],
      state: [null, Validators.required],
      imgUrl: [null,Validators.required]
    });
  }
  getCarDataForm(){
    this.carService.getCarById(this.activatedRoute.snapshot.params["id"]).subscribe((result)=>{
      this.carEditForm = new FormGroup({
        carName: new FormControl(result['carName']),
        brandId: new FormControl(result['brandId']),
        description: new FormControl(result['description']),
        plate: new FormControl(result['plate']),
        state:new FormControl(result['state']),
        imgUrl: new FormControl(result['imgUrl']),
      })
    })
  }
  
  getBrands(){
    this.brandService.getBrands().subscribe((data)=>{
      this.brands=data
    })
  }

}
