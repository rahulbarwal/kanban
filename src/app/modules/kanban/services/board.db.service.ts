import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, arrayRemove, collection, collectionData, deleteDoc, doc, Firestore, updateDoc, writeBatch } from '@angular/fire/firestore';
import { IBoard, ITask } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardDbService {

  constructor(private firestore: Firestore, private auth: Auth) { }

  getColletionRef(path: string) {
    return collection(this.firestore, path);
  }

  getDocumentRef(path: string) {
    return doc(this.firestore, path);
  }

  async createBoard(data: IBoard) {
    const user = this.auth.currentUser;
    if (user) {
      await addDoc(this.getColletionRef('boards'),
        { ...data, uid: user?.uid, tasks: [{ desciption: 'Hello', label: 'yellow' }] });
    }
  }

  deleteBoard(boardId: string) {
    return deleteDoc(this.getDocumentRef(`boards/${boardId}`));
  }

  updateTasks(boardId: string, tasks: ITask[]) {
    return updateDoc(this.getDocumentRef(`boards/${boardId}`), { tasks })
  }

  removeTask(boardId: string, task: ITask) {
    return updateDoc(this.getDocumentRef(`boards/${boardId}`), { tasks: arrayRemove(task) })
  }

  async getUserBoards() {
    const user = this.auth.currentUser;
    if (user) {
      return collectionData(this.getColletionRef('boards'));
    } else {
      return [];
    }
  }

  async sortBoards(boards: IBoard[]) {
    const batch = writeBatch(this.firestore)
    const refs = boards.map(b => this.getDocumentRef(`boards/${b}`));
    refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    await batch.commit();
  }
}
