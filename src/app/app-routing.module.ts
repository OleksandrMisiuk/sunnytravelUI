import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserListComponent } from './user-list/user-list.component';
import { AccountComponent } from './account/account.component';



export const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tour',
    component: TourDetailsComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
