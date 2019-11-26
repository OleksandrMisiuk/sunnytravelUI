import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SigninMessageService } from '../signin-message.service';
import { User } from '../model/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  checkoutForm;
  user;
  error: boolean;
  userMessage: User;
  constructor(private formBuilder: FormBuilder, private userService: UserService, 
    private router: Router, private signinMessageService: SigninMessageService) {
      this.checkoutForm = this.formBuilder.group({
        username: '',
        password: ''
      });
      this.userMessage = new User;
     }

  ngOnInit() {
  }

  onSubmit(user) {
    // Process checkout data here
    
    this.userService.authUser(user).subscribe(data => {
      data.roles.forEach(element => {
          localStorage.setItem(element.name, 'true');
        });
      this.userMessage.roles = data.roles;
      this.userMessage.username = data.username;
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.username);
      this.error = false;
      this.signinMessageService.changeMessage(this.userMessage);
      this.router.navigateByUrl('/home');
    }, error =>{
      this.signinMessageService.changeMessage(false);
      this.error = true;
    });
  } 

  toSignUp(){
    this.router.navigateByUrl('/signup');
  }

}
