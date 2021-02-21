import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { IColumn } from '../models/models';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss'],
})

export class SheduleComponent implements OnInit {
    scheduleColumns: IColumn[];

    constructor(private _apiService: ApiService) {}

    async ngOnInit() {
        await this.loadDataFromStorage();
    }

    async loadDataFromStorage() {
        // maybe load scheduleColums with card
        this.scheduleColumns = await this._apiService.getScheduleColumns();
    }
}
