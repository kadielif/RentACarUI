import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"rental",component:RentalComponent},
  {path:"rental/:carId",component:RentalComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/carDetail/:carId",component:CarDetailComponent},
  {path:"cars/carDetail",component:CarDetailComponent},
  {path:"cars/carFilter/:brandId/:colorId",component:CarComponent},
  {path:"car/add",component:CarAddComponent},
  {path:"brand/add",component:BrandAddComponent},
  {path:"color/add",component:ColorAddComponent},
  {path:"color/update/:id/:colorName",component:ColorUpdateComponent},
  {path:"brand/update/:id/:brandName",component:BrandUpdateComponent},
  {path:"car/update/:id",component:CarUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
 