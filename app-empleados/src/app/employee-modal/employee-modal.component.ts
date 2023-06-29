import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-modal',
  template: `
    <h2 mat-dialog-title>{{data.title}}</h2>
    <mat-dialog-content>
     
      <p [innerHTML]="data.message"></p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Aceptar</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
 
}
