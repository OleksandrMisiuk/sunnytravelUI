import { Component, OnInit } from '@angular/core';
import { ComponentMessageService } from '../component-message.service';
import { Tour } from '../model/Tour';
import { Preorder } from '../model/Preorder';
import { TourService } from '../tour.service';
import { Bill } from '../model/Bill';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: Tour;
  bill: Bill;
  sent: boolean;
  orderError: boolean;

  constructor(private compMessage: ComponentMessageService, private tourService: TourService) { }

  ngOnInit() {
    this.compMessage.currentMessage.subscribe(message => this.tour = message)
    console.log(this.tour);
  }

  getBill(packId: number, mealId: number, roomId: number, dCode: string){
    var preorder = new Preorder();
    preorder.packageId = packId;
    preorder.mealId = mealId;
    preorder.roomId = roomId;
    preorder.discountCode = dCode;
    console.log(preorder);
    this.tourService.getBill(preorder).subscribe((res) => {
      this.bill = res;
      console.log(res);
    })
  }

  getOrder(packId: number, mealId: number, roomId: number, dCode: string){
    var preorder = new Preorder();
    preorder.packageId = packId;
    preorder.mealId = mealId;
    preorder.roomId = roomId;
    preorder.discountCode = dCode;
    console.log(preorder);
    this.tourService.setOrder(preorder).subscribe((res) => {
      this.sent = true;
    }, (error) =>{
      this.orderError = true;
      console.log(this.orderError);
    })
  }

  back(){
    this.bill = null;
  }

}
