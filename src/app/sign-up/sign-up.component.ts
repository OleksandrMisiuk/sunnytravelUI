import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  checkoutForm;
  constructor(private formBuilder: FormBuilder, private userService: UserService, 
    private router: Router) { 
      this.checkoutForm = this.formBuilder.group({
        email: '',
        password: ''
      });
    }

  ngOnInit() {
  }

  onSubmit(user) {
    // Process checkout data here
    this.userService.regUser(user).subscribe(data =>{
      this.router.navigateByUrl('/signin');
    });
  }

}
