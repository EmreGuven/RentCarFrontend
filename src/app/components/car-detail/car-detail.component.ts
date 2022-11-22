import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from './../../models/car-detail';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetail: CarDetail;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toasterService: ToastrService,
    private location:Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetail(params['id']);
      
    });
  }

  getCarDetail(carid) {
    this.carService.getCarDetail(carid).subscribe((data) => {
      this.carDetail = data;
    });
  }

  deleteCar(id: any) {
    this.carService.deleteCar(id).subscribe(() => {
      this.ngOnInit();
      this.location.back();
      this.toasterService.success('Silme İşlemi Gerçekleşti', 'Tebrikler (:');
    });
  }
}
