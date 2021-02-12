import { Component, OnInit } from '@angular/core';

import { GlobalStorageService } from '../services/globalStorage.service';
import { IColumn } from '../models/models';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss'],
})
export class SheduleComponent implements OnInit {
  columnsData: IColumn[];

  constructor(private _storage: GlobalStorageService) {}

  ngOnInit(): void {
    this.loadDataFromStorage();
  }

  addColumnHandler(): void {
    const columnTitle = prompt('Введите название колонки');
    this._storage.createNewColumn(columnTitle || 'без названия');

    this.loadDataFromStorage();
  }

  loadDataFromStorage(): void {
    this.columnsData = this._storage.getColumnsStorage();
  }
}
