import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule
  , MatToolbarModule
  , MatMenuModule
  , MatIconModule
  , MatCardModule
  , MatDialogModule
} from '@angular/material';
import { PayConfirmDialogComponent } from './pay-confirm-dialog/pay-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PayConfirmDialogComponent
  ],
  entryComponents: [
    PayConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
