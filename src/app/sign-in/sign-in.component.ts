import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  checkoutForm;
  user;

  constructor(private formBuilder: FormBuilder, private userService: UserService, 
    private router: Router) {
      this.checkoutForm = this.formBuilder.group({
        username: '',
        password: ''
      });
     }

  ngOnInit() {
  }

  onSubmit(user) {
    // Process checkout data here
    this.userService.authUser(user).subscribe(data => {
      data.roles.forEach(element => {
          localStorage.setItem(element.name, 'true');
        });
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.username);
        this.router.navigateByUrl('/home');
    });
  } 

  toSignUp(){
    this.router.navigateByUrl('/signup');
  }

}
