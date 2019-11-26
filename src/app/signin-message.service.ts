import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Role } from './model/Role';

@Injectable({
  providedIn: 'root'
})
export class SigninMessageService {
  messageProvider = new BehaviorSubject(Object);
  currentMessage = this.messageProvider.asObservable();

  constructor() { }

  changeMessage(obj) {
    this.messageProvider.next(obj);
  }
}
