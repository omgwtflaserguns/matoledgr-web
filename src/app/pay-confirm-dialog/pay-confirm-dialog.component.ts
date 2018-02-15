import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from '../../generated/matomat_pb';

@Component({
  selector: 'app-pay-confirm-dialog',
  templateUrl: './pay-confirm-dialog.component.html',
  styleUrls: ['./pay-confirm-dialog.component.css']
})
export class PayConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PayConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {product: Product}) {
      console.log('Bezahl Dialog geöffnet');
    }

}
