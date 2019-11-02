import { Component, OnInit } from '@angular/core';
import { ComponentMessageService } from '../component-message.service';
import { Tour } from '../model/Tour';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: Tour;

  constructor(private compMessage: ComponentMessageService) { }

  ngOnInit() {
    this.compMessage.currentMessage.subscribe(message => this.tour = message)
    console.log(this.tour);
  }

}
