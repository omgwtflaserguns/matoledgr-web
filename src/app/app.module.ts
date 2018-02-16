import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule
  , MatToolbarModule
  , MatMenuModule
  , MatIconModule
  , MatCardModule
  , MatDialogModule
  , MatInputModule
  , MatFormFieldModule
} from '@angular/material';
import { PayConfirmDialogComponent } from './pay-confirm-dialog/pay-confirm-dialog.component';
import { LoginComponent } from './login/login.component';
import { DrinksComponent } from './drinks/drinks.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'drinks', component: DrinksComponent },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PayConfirmDialogComponent,
    LoginComponent,
    DrinksComponent,
    PagenotfoundComponent
  ],
  entryComponents: [
    PayConfirmDialogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    , BrowserModule
    , MatButtonModule
    , MatToolbarModule
    , MatMenuModule
    , MatIconModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatDialogModule
    , MatInputModule
    , MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
