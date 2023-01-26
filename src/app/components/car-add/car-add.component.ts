import { ActivatedRoute } from '@angular/router';
import { ColorService } from './../../services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {

  
  carAddForm: FormGroup;
  brands:Brand[];
  colors:Color[];
  
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toasterService: ToastrService,
    private brandService:BrandService,
    private colorService:ColorService,
    private activatedroute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.activatedroute.params.subscribe((params)=>{
      this.brandService.getBrands().subscribe((data)=>{
        this.brands=data
      });
      this.colorService.getColors().subscribe((data)=>{
        this.colors=data
      });
    })
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      carName: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      description: ['', Validators.required],
      plate: ['', Validators.required],
      state: ['', Validators.required],
      imgUrl: ['',Validators.required]
    });
    
  }

  addCar() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.addCar(carModel).subscribe((data) => {
        this.clearForm();
        
        this.toasterService.success('Araç Eklendi', 'Tebrikler (:');
      });
    } else {
      this.toasterService.error('Eksik Bilgi', '!');
    }
  }
  clearForm(){
    this.carAddForm.reset();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((data)=>{
      this.brands=data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe((data)=>{
      this.colors=data
    })
  }
}
