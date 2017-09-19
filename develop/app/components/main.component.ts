import { Component, ViewChild } from "@angular/core";

import { Router } from '@angular/router';

import { AppSettings } from "./../app.setting"
import { LoginData } from './../models/loginData';

@Component({
    selector: "main",
    templateUrl: "html/components/main.component.html"
})
export class MainComponent {

    public companyName: string = 'Hormoz Marine';
   
   

    constructor(private _router: Router) { }

   
    // public login(loginData: LoginData): void {
    //     if (loginData.username == "admin" && loginData.password == "1") {

    //         this._islogedin = true;
    //         this.signinComponent.isLoginFailed(false);


    //     }
    //     else {

    //         this._islogedin = false;
    //         this.signinComponent.isLoginFailed(true);


    //     }
    // }


    public logout() {
        AppSettings.logout();
        this._router.navigate(['']);



    }


   

}