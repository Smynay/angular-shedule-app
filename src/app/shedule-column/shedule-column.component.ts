import { GlobalStorageService } from './../globalStorage.service';
import { Component, Input, OnInit } from '@angular/core';

import { IColumn } from './../types/types';

@Component({
  selector: 'app-shedule-column',
  templateUrl: './shedule-column.component.html',
  styleUrls: ['./shedule-column.component.scss'],
})
export class SheduleColumnComponent implements OnInit {
  @Input() columnData: IColumn;

  cardsData;

  constructor(private _storage: GlobalStorageService) {}

  ngOnInit(): void {
    this.cardsData = this.columnData.cardsIndexes.map((index) =>
      this._storage.getLessonCardByIndex(index)
    );
  }
}
