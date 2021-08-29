import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kanban-task-dialog',
  template: `
    <h1 mat-dialog-title> New board</h1>
    <div mat-dialog-content>
    <mat-form-field>
      <input matInput type="text" placeholder="Task description" [(ngModel)] ="data.task.description"/>
    </mat-form-field>
    <br/>
    <mat-button-toggle-group #group="matButtonToggleGroup" [(ngModel)]="data.task.label">
      <mat-button-toggle *ngFor=" let opt of labelOptions" [value]="opt">
      <mat-icon [ngClass]="opt">
         {{opt === 'gray' ? 'check_circle': 'lens'}}
      </mat-icon>  
    </mat-button-toggle>
    </mat-button-toggle-group>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.title" cdkFocusInitial>Submit</button>
  </div>
  `,
  styles: [
  ]
})
export class TaskDialogComponent implements OnInit {

  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];
  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
