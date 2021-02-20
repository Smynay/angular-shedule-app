import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  editColumnTitleHandler(): void {
    const newTitle = prompt('Введите заголовок колонки');

    if (newTitle) {
      this._storage.changeColumnTitleById(this.columnId, newTitle);
      this.loadDataFromStorage();
    }
  }

  deleteCardHandler({cardId}): void {
    if (confirm('Действительно удалить?')) {
      this._storage.deleteLessonCard(cardId);
      this.loadDataFromStorage();
    }
  }
}
