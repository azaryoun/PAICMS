
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { SigninComponent } from './components/signin.component';
import { MainComponent } from './components/main.component';

//Pages
import { DashboardPage } from './pages/dashboard.page';
import { VoyagePage } from './pages/voyage.page';

//Services
import { AuthGuardService } from './services/authGuard.service';
//import { PreventUnsavedChangesGuardService } from './services/preventUnsavedChangesGaurd.service';


export const AppRouting = RouterModule.forRoot([
    { path: '', component: SigninComponent },
    {
        path: 'main', component: MainComponent, canActivate:[AuthGuardService], children: [
            { path: 'voyage', component: VoyagePage },
            { path: 'dashboard', component: DashboardPage },
            { path: '**', redirectTo:'dashboard' }
        ]
    },

]);

