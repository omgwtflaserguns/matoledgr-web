import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DrinksComponent } from './drinks/drinks.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    { path: 'drinks', component: DrinksComponent },
    { path: 'login', component: LoginComponent },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    { path: '**', component: PagenotfoundComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
