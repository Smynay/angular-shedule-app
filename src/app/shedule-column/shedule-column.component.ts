import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ApiService } from '../services/api.service';
import { ILesson, IColumn } from '../models/models';
import { extractHoursAndMinutesFromDate } from '../utils/extractHoursAndMinutesFromDate';

@Component({
    selector: 'app-shedule-column',
    templateUrl: './shedule-column.component.html',
    styleUrls: ['./shedule-column.component.scss'],
})
export class SheduleColumnComponent implements OnInit {
    @Input() column: IColumn;

    cardsData: ILesson[];

    constructor(
    private _apiService: ApiService,
    private _router: Router
    ) {}

    ngOnInit() {
        this.loadData();
    }

    async loadData() {
        this.cardsData = await this._apiService.getCardsByColumnId(this.column.id);
        this.cardsData.sort(this.compareTimeStrings)
    }

    addCardHandler() {
        this._router.navigate(['/create', this.column.id]);
    }

    async cardEventsHandler({action, cardId}) {
        if (action === "edit") {
            this._router.navigate(['/lesson', cardId]);        
        } else if (action === "delete") {
            if (confirm('Действительно удалить?')) {
                await this._apiService.deleteCard(cardId);
                await this.loadData();
            }
        }
    }

    async drop(event: CdkDragDrop<ILesson[]>) {
        console.log(event);
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );

        } else {
            const cardId = event.previousContainer.data[event.previousIndex].id;
            const newColumnId = +event.container.id.slice(-1);

            await this._apiService.moveCard(cardId, newColumnId)

            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );

            this.cardsData.sort(this.compareTimeStrings); 
        }
    }

    private compareTimeStrings(a: ILesson, b: ILesson): number {
        const [hoursA, minutesA] = extractHoursAndMinutesFromDate(a.time);
        const [hoursB, minutesB] = extractHoursAndMinutesFromDate(b.time);

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
}
