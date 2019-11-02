import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tour } from './model/Tour';

@Injectable({
  providedIn: 'root'
})
export class ComponentMessageService {

  messageProvider = new BehaviorSubject(new Tour);
  currentMessage = this.messageProvider.asObservable();

  constructor() { }

  changeMessage(obj) {
    this.messageProvider.next(obj);
  }
}
