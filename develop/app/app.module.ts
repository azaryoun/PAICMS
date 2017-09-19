///<reference path="../../typings/index.d.ts"/>

// Import Modules:
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'; //Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms'; // Model Driven Forms
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// User defined Modules:
import { SpotifyModule } from "./modules/spotify/spotify.module";
import { UserModule } from "./modules/user/user.module";

import { MyFormModule } from "./modules/myForm/myForm.module";


import { AngularMaterialModule } from "./angular-material.module";

//Import Module Loader
import "rxjs/Rx";

// Import Components:
import { AppComponent } from "./components/app.component";
import { ProductComponent } from "./components/product.component";
import { Product2Component } from "./components/product2.component";
import { ProductsComponent } from "./components/products.component";
import { RatingComponent } from './components/rating.component';
import { JumboTronComponent } from './components/jumboTron.component';
import { ObservableComponent } from './components/observable.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notFound.component';
import { LoginComponent } from './components/login.component';
import { Login2Component } from './components/login2.component';

import { SigninComponent } from "./components/signin.component";
import { MainComponent } from "./components/main.component";

import { CheckboxConfigurableExample } from './components/checkbox.component';


// Import Pages:
import { DashboardPage } from "./pages/dashboard.page";
import { VoyagePage } from "./pages/voyage.page";



// Import Services: note: Services in ng2 are SINGLE TONE and with bootstraping will be creaed
import { ProductService } from './services/product.service';
import { Product2Service } from './services/product2.service';
import { LoginService } from './services/login.service';
import { Http2Service } from './services/http2.service';
import { AuthGuardService } from './services/authGuard.service';
import { VoyageService } from './services/voyage.service';
//import {PreventUnsavedChangesGuardService } from './services/preventUnsavedChangesGaurd.service';


// Import Pipes:
import { TruncatePipe } from './pipes/truncate.pipe';

//Import Routings:
import { AppRouting } from "./app.routing";
import { SpotifyRouting } from "./modules/spotify/spotify.routing";
import { UserRouting } from "./modules/user/user.routing";

@NgModule({
    // directives, components, pages and pipes
    declarations: [

        // Components
        ProductComponent,
        RatingComponent,
        Product2Component,
        ProductsComponent,
        TruncatePipe,
        JumboTronComponent,
        ObservableComponent,
        HomeComponent,
        LoginComponent,
        Login2Component,
        NotFoundComponent,
        CheckboxConfigurableExample,

        AppComponent,
        SigninComponent,
        MainComponent,


        //Pages
        DashboardPage,
        VoyagePage

    ],

    // modules & Routing
    imports: [
        // Angular Common Modules
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,

        // User Defined Modules

        SpotifyModule,
        UserModule,
        AngularMaterialModule,
        MyFormModule,

        // User Defined Routings

        SpotifyRouting,
        UserRouting,

        // Main Routing
        AppRouting
    ],
    // providers (Services:SingleTon) in order to use built in Ng2 Dependency Injection
    providers: [
        ProductService,
        Product2Service,
        AuthGuardService,
        //  PreventUnsavedChangesGuardService,
        Http2Service,
        LoginService,
        VoyageService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }



