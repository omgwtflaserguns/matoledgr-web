import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';

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
  providers: [
    ProductService,
    UserService
  ],
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
  bootstrap: [AppComponent]
})
export class AppModule { }
