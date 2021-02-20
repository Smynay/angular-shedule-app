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
      .filter((lesson) => lesson.columnId == this.columnId)
      .sort(this.compareTimeStrings);
  }

  compareTimeStrings(a: any, b: any): number {
    function getHoursMinutes(timestring) {
      return [+timestring.slice(0, 2), +timestring.slice(-2)];
    }

    const [hoursA, minutesA] = getHoursMinutes(a.time);
    const [hoursB, minutesB] = getHoursMinutes(b.time);

    if(hoursA > hoursB){
      return 1;
    }

    if(hoursA < hoursB){
      return -1
    }

    if(minutesA > minutesB){
      return 1
    }

    if(minutesA < minutesB){
      return -1
    }

    return 0
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

  drop(event: CdkDragDrop<ILesson[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    } else {
      const cardId = event.previousContainer.data[event.previousIndex].id;
      const newColumnId = +event.container.id.slice(-1);

      this._storage.changeLessonCardColumnById(cardId, newColumnId);

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.cardsData.sort(this.compareTimeStrings);
    }
  }
}
