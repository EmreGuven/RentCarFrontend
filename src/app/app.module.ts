import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './layouts/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorEditComponent } from './components/color/color-edit/color-edit.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilterBrandNamePipe } from './pipes/filter-brand-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    NaviComponent,
    CarDetailComponent,
    CarEditComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorListComponent,
    ColorAddComponent,
    ColorEditComponent,
    FilterPipe,
    FilterBrandNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
