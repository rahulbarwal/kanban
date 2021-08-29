import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kanban-board-dialog',
  template: `
    <h1 mat-dialog-title> New board</h1>
    <div mat-dialog-content>
    <mat-form-field>
      <input matInput type="text" placeholder="Title" [(ngModel)] ="data.title"/>
    </mat-form-field>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.title" cdkFocusInitial>Submit</button>
  </div>
  `,
  styles: [
  ]
})
export class BoardDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
