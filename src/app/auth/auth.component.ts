import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  form!: FormGroup;
  public displaySignUp: boolean = false;
  public displayLogin: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) {
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
    
    this.displayLogin = false;
    this.displaySignUp = true;
  }
  refresh(): void {
    window.location.reload();
}
  submit(): void {
    this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
      .subscribe(res => {console.log(res)})
      
  }
  

  submitLogin():void {
    this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(() => this.router.navigate(['/']));
  }

  loginController() {
    this.displayLogin = false;
    this.displaySignUp = true;
  }

  signupController() {
    this.displayLogin = true;
    this.displaySignUp = false;
  }
}