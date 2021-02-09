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
    this.columnsData = this._storage.getColumnsStorage();
  }
}
