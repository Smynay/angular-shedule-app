import { Component, OnInit } from '@angular/core';

import { GlobalStorageService } from '../globalStorage.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss'],
})
export class SheduleComponent implements OnInit {
  columnsData;

  constructor(private _storage: GlobalStorageService) {}

  ngOnInit(): void {
    this.loadDataFromStorage()
  }

  addColumnHandler(){
    const columnTitle = prompt('Введите название колонки');
    this._storage.createNewColumn(columnTitle || 'без названия');
  }

  loadDataFromStorage(){
    this.columnsData = this._storage.getColumnsStorage();
  }
}
