import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
    , BrowserModule
    , FormsModule
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
