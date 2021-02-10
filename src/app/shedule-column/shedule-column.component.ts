import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalStorageService } from './../globalStorage.service';
import { IColumn } from './../types/types';

@Component({
  selector: 'app-shedule-column',
  templateUrl: './shedule-column.component.html',
  styleUrls: ['./shedule-column.component.scss'],
})
export class SheduleColumnComponent implements OnInit {
  @Input() columnIndex: number;

  columnData;
  cardsData;

  constructor(
    private _storage: GlobalStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loadDataFromStorage()
  }

  loadDataFromStorage(){
    this.columnData = this._storage.getColumnStorageById(this.columnIndex);
    this.cardsData = this.columnData.cardsIndexes.map((index) =>
      this._storage.getLessonCardByIndex(index)
    );
  }

  addCardHandler() {
    //TODO: перенести создание карточки в форму
    this._router.navigate([
      '/lesson',
      this._storage.createNewLessonCard(this.columnIndex),
    ]);
    this.loadDataFromStorage()
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

  refreshColumnData(){
    this.loadDataFromStorage()
  }
}
