import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { getEmailId } from './state/login.actions';
import { getEmail } from './state/login.selector';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailValue;
  initialEmailValue$: Observable<string>;
  
  constructor(private login: FormBuilder,  private router: Router, private store : Store<AppState>){}
// login form group declaration 
  isLoginError = false;
  loginForm = this.login.group({
    emailId: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
  })




  ngOnInit(): void {
    // getting the login data for the App store
    this.initialEmailValue$ = this.store.select(getEmail);
    this.store.select(getEmail).subscribe((data) =>{
      this.emailValue = data;
    })
  }
  // storing login infomation in session storage and redirecting to dashboard
  getLoginInfo(){
    this.store.dispatch(getEmailId({getEmailId: this.emailValue}));
    sessionStorage.setItem('userInfo', this.emailValue);
        this.router.navigate(['/dashboard']);

}
}
