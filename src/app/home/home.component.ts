import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Tour } from '../model/Tour';
import { TourService } from '../tour.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ComponentMessageService } from '../component-message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checkoutForm;
  tours: Tour[];
  constructor( private formBuilder: FormBuilder,
     private tourService: TourService, private route: ActivatedRoute, private router: Router, private compMessage: ComponentMessageService) { 
      this.checkoutForm = this.formBuilder.group({
        country: [''],
        city: [''],
        dateDepart: [''],
        duration: [''],
        numberOfPeople: [''],
        seaDistance: [''],
        roomType: [''],
        meal: [''],
        hotelRating: [''],
        transfer: true,
        visa: true,
        insurance: true,
      });
    }
  
  get country(){
    return this.checkoutForm.get('country');
  } 
  get city(){
    return this.checkoutForm.get('city');
  }  
  get dateDepart(){
    return this.checkoutForm.get('dateDepart');
  }   
  get duration(){
    return this.checkoutForm.get('duration');
  }   
  get numberOfPeople(){
    return this.checkoutForm.get('numberOfPeople');
  }   
  get seaDistance(){
    return this.checkoutForm.get('seaDistance');
  } 
  get roomType(){
    return this.checkoutForm.get('roomType');
  } 
  get meal(){
    return this.checkoutForm.get('meal');
  } 
  get hotelRating(){
    return this.checkoutForm.get('hotelRating');
  }   
  get transfer(){
    return this.checkoutForm.get('transfer');
  }   
  get visa(){
    return this.checkoutForm.get('visa');
  }   
  get insurance(){
    return this.checkoutForm.get('insurance');
  }   

  ngOnInit() {
  }

  onSubmit(tour: Tour){
    tour.dateDepart = JSON.stringify(tour.dateDepart).replace('Z', '').replace('"', '').replace('"', '');
    tour.hotel = " ";
    this.tourService.filterTour(tour).subscribe((res)=>{
      this.tours = res;
      console.log(this.tours);
    });
  }

  onDblClickTourDetails(id: number){
    console.log(id);
    this.compMessage.changeMessage(this.tours[id]);
    this.router.navigateByUrl("/tour");
  }

}
