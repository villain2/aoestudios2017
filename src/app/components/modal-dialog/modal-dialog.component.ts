import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit  {
  formListType: string;

  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit ()
    {
      console.log(this.data);
      this.formListType    = this.data.listType;
    }


  /*onCloseConfirm ()
  {
    this.dialogRef.close();
  }

  onCloseCancel()
  {
    this.dialogRef.close();
  }*/



}
