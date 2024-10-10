import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    // {
    //     path:'',
    //     redirectTo:'home',
    //     pathMatch:'full'
    // },
    {
        path:'',
       loadComponent:()=>import('./login/login.component').then(a=>a.LoginComponent)
    }
];
