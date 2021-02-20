import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { GlobalStorageService } from '../services/globalStorage.service';
import { ILesson } from '../models/models';
import { IColumn } from '../models/models';

@Component({
  selector: 'app-shedule-column',
  templateUrl: './shedule-column.component.html',
  styleUrls: ['./shedule-column.component.scss'],
})
export class SheduleColumnComponent implements OnInit {
  @Input() columnId: number;

  columnData: IColumn;
  cardsData: ILesson[];

  constructor(
    private _storage: GlobalStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loadDataFromStorage();
  }

  loadDataFromStorage(): void {
    this.columnData = this._storage.getColumnStorageById(this.columnId);
    this.cardsData = this._storage
      .getLessonsStorage()
      .filter((lesson) => lesson.columnId == this.columnId);
  }

  addCardHandler(): void {
    this._router.navigate(['/create', this.columnId]);
  }

  cardEventsHandler({action, cardId}): void {
    switch (action){
      case 'edit':
        this._router.navigate(['/lesson', cardId]);
        break;

      case 'delete':
        if (confirm('Действительно удалить?')) {
          this._storage.deleteLessonCard(cardId);
          this.loadDataFromStorage();
        }
        break;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
