import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { IBoard, ITask } from '../../models/board.model';
import { BoardDbService } from '../../services/board.db.service';

@Component({
  selector: 'kanban-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board: IBoard;

  constructor(private boardDB: BoardDbService) { }

  ngOnInit(): void {
  }

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.tasks as ITask[], event.previousIndex, event.currentIndex);
    // this.boardDB.updateTasks(this.board.id as string, this.board.tasks as ITask[]);
  }

}
