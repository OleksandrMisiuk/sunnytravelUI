import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import { Bill } from '../model/Bill';
import { Preorder } from '../model/Preorder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  bill: Bill;

  constructor(private tourService: TourService) { }

  ngOnInit() {
  }

}
