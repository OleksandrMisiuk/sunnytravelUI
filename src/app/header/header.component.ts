import { Component, OnInit } from '@angular/core';
import { SigninMessageService } from '../signin-message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: boolean
  auth: any;
  constructor(private signinMessageService: SigninMessageService) {
    console.log(this.auth);
  }

  ngOnInit() {
    this.signinMessageService.currentMessage.subscribe((user: any) => {
      if(localStorage.getItem('email')) this.auth = true; else this.auth = false;
      console.log(user);
      if(localStorage.getItem('ADMIN')) this.admin = true; else this.admin = false;
    });
    console.log(this.auth);
  }

  logOut(){
    localStorage.clear();
    this.auth = false;
    this.admin = false;
  }
}
