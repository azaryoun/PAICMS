import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonValidator } from './../validators/common.validator';
import { LoginData } from './../models/loginData';


import { Router } from '@angular/router';


@Component({
  selector: 'signin',
  templateUrl: 'html/components/signin.component.html',
  styles: [`   
    .page-signin-modal {
        position: relative;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
        z-index: 1;
        display: block;
      }
  
      .page-signin-form-group { position: relative; }
  
      .page-signin-icon {
        position: absolute;
        line-height: 21px;
        width: 36px;
        border-color: rgba(0, 0, 0, .14);
        border-right-width: 1px;
        border-right-style: solid;
        left: 1px;
        top: 9px;
        text-align: center;
        font-size: 15px;
      }
  
      html[dir="rtl"] .page-signin-icon {
        border-right: 0;
        border-left-width: 1px;
        border-left-style: solid;
        left: auto;
        right: 1px;
      }
  
      .page-signin-icon + .page-signin-form-control {
        padding-left: 50px;
    }
   
      #page-signin-forgot-form {
        display: none;
      }
  
      .page-signin-modal > .modal-dialog { margin: 30px 10px; }
  
      @media (min-width: 544px) {
        .page-signin-modal > .modal-dialog { margin: 60px auto; }
      }`]
})
export class SigninComponent implements OnInit {

public form:FormGroup;

  constructor(private _router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,
      CommonValidator.cannotContainSpace])]
    })
  }


  public login(): void {
    let loginData: LoginData;
    loginData = this.form.value;
    if (loginData.email == "admin@gmail.com" && loginData.password == "123") {
      this._router.navigate(['main/dashboard']);
    }
    else {
      this.form.setErrors({ invalidLogin: true });
    }
  };

 

}
