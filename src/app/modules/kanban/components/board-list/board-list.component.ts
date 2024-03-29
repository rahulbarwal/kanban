import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BoardDialogComponent } from '../../dialogs/board-dialog.component';
import { IBoard } from '../../models/board.model';
import { BoardDbService } from '../../services/board.db.service';

@Component({
  selector: 'kanban-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit, OnDestroy {

  boards: IBoard[];
  sub: Subscription;
  constructor(private boardDB: BoardDbService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBoardsData();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  openBoardDialog() {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.boardDB.createBoard({
          title: res,
          priority: this.boards.length
        })
      }
    })
  }

  async getBoardsData() {
    this.boards = [
      {
        id: '1',
        title: 'Rahul',
        priority: 1,
        tasks: [
          { description: 'dummy 1', label: 'yellow' },
          { description: 'dummy 2', label: 'purple' },
          { description: 'dummy 3', label: 'green' },
        ]
      },
      {
        id: '2',
        title: 'Vivek',
        priority: 3,
        tasks: [
          { description: 'dummy 4', label: 'gray' },
        ]
      },
      {
        id: '3',
        title: 'Sandhya',
        priority: 3,
        tasks: [
          { description: 'dummy 5', label: 'blue' },
        ]
      }
    ];

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    // this.boardDB.sortBoards(this.boards);
  }
}
