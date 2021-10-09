import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  displaySignUp:boolean = true;
  displayLogin : boolean = false;
  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {

  }

  loginController() {
   this.displayLogin = true
   this.displaySignUp = false
  }

  signupController() {
    this.displayLogin = false
    this.displaySignUp = true
   }

}
