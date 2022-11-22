import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

const routes: Routes = [
  { path: 'cars', component: CarComponent },
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars/brand/:brandid', component: CarComponent },
  { path: "cars/:id" , component:CarEditComponent},
  { path: 'cars/detail/:id', component: CarDetailComponent },
  { path: "car/add" , component:CarAddComponent},
  { path: "brand/add" , component:BrandAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
