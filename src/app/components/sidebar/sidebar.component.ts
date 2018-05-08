import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  firstName: string;
  lastName: string;
  email: string;
  listType: string;
  dialogResult: any;

  constructor(public dialog: MatDialog) { }

  openDialog(type): void
  {
    let dialogRef   = this.dialog.open(ModalDialogComponent, {
      width: '50%',
      data: { listType: type}
    });

    this.listType   = type;
    console.log(type);


    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
      this.dialogResult   = result;
    });
  }
}
