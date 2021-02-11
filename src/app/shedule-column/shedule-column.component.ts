import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalStorageService } from '../services/globalStorage.service';

@Component({
  selector: 'app-shedule-column',
  templateUrl: './shedule-column.component.html',
  styleUrls: ['./shedule-column.component.scss'],
})
export class SheduleColumnComponent implements OnInit {
  @Input() columnId: number;
  @Output() onColumnDeleted = new EventEmitter();

  columnData;
  cardsData;

  constructor(
    private _storage: GlobalStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loadDataFromStorage();
  }

  loadDataFromStorage(){
    this.columnData = this._storage.getColumnStorageById(this.columnId);
    this.cardsData = this._storage.getLessonsStorage().filter((lesson) => lesson.columnId == this.columnId);
  }

  addCardHandler() {
    this._router.navigate([
      '/create',
      this.columnId
    ]);
  }

  editColumnTitleHandler(){
    const newTitle = prompt('Введите заголовок колонки');

    if(newTitle){
      this._storage.changeColumnTitleById(this.columnId, newTitle);
      this.loadDataFromStorage();
    }
  }

  deleteColumnHandler(){
    if(confirm('Действительно удалить колонку?')){
      this._storage.deleteColumnById(this.columnId);
    }

    this.onColumnDeleted.emit(null);
  }

  refreshColumnData(){
    this.loadDataFromStorage();
  }
}
