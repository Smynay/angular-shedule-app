import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalStorageService } from './../globalStorage.service';
import { IColumn } from './../types/types';

@Component({
  selector: 'app-shedule-column',
  templateUrl: './shedule-column.component.html',
  styleUrls: ['./shedule-column.component.scss'],
})
export class SheduleColumnComponent implements OnInit {
  @Input() columnData: IColumn;
  @Input() columnIndex: number;

  cardsData;

  constructor(
    private _storage: GlobalStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.cardsData = this.columnData.cardsIndexes.map((index) =>
      this._storage.getLessonCardByIndex(index)
    );
  }

  addCardHandler() {
    this._router.navigate([
      '/lesson',
      this._storage.createNewLessonCard(this.columnIndex),
    ]);
  }

  editColumnTitleHandler(){
    if(prompt('Введите заголовок колонки')){
      //TODO: изменить заголовок колонки
    }
  }

  deleteColumnHandler(){
    if(confirm('Действительно удалить колонку?')){
      //TODO: удалить колонку
    }
  }
}
