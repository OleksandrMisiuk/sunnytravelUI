import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';



export const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tour',
    component: TourDetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
