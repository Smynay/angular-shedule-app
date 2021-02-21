import { Injectable } from '@angular/core';

import { ILesson, IColumn } from '../models/models';
import { GlobalStorageService } from './globalStorage.service';

@Injectable({
	providedIn: 'root',
})

export class ApiService {
  
    constructor(private _storageService: GlobalStorageService) {
    }

    public getScheduleColumns(): Promise<IColumn[]> {
        return Promise.resolve(this._storageService.getColumnsStorage());
    }

    public getCardsByColumnId(columnId: number): Promise<ILesson[]> {
        return Promise.resolve(this._storageService.getCardsByColumnId(columnId));
    }

    public deleteCard(cardId: number): Promise<void> {
        return Promise.resolve(this._storageService.deleteLessonCard(cardId));
    }

    public moveCard(cardId: number, columnId: number): Promise<void> {   	
        return Promise.resolve(this._storageService.changeLessonCardColumnById(cardId, columnId));
    }

    public getCard(cardId: number): Promise<ILesson> {   	
        return Promise.resolve(this._storageService.getLessonCardById(cardId,));
    }
}
