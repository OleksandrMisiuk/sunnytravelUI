import { Component, OnInit } from '@angular/core';
import { Tour } from '../model/Tour';
import { TourService } from '../tour.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username: String;
  tour: Tour;
  constructor(private tourService: TourService, private userService: UserService) { }

  ngOnInit() {
    this.username = localStorage.getItem('email');
    this.tourService.getUsersTour(localStorage.getItem('email')).subscribe((res)=>{
      this.tour = res;
      console.log(res);
    }, error => {
      console.log(error);
    })
  }
  removeTour(){
    this.userService.removeUsersTour(localStorage.getItem('email')).subscribe((res)=>{
      console.log(res);
      this.tour = null;
    }, error => {
      console.log(error);
    })
  }
}
