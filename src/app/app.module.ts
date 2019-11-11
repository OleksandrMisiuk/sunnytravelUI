import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule, MatProgressSpinnerModule,
  MatRippleModule, MatTooltipModule
} from '@angular/material';
import {ToastrModule} from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { OrderComponent } from './order/order.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TourDetailsComponent,
    OrderComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    ToastrModule.forRoot(
      {
        closeButton: true,
        disableTimeOut: true,
        maxOpened: 6,
        progressBar: true,
        newestOnTop: true,
        autoDismiss: true,
        countDuplicates: true,
        preventDuplicates: true
      }
    ),
    MatTooltipModule,
    MatProgressSpinnerModule,
    BrowserModule, NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
