import { Injectable } from '@angular/core';
import { ILesson, IColumn } from '../types/types';

import { getRandomId } from '../utils/randomId';

@Injectable({
  providedIn: 'root',
})
export class GlobalStorageService {
  _lessonsStorage: ILesson[] = [
    { id: 0, time: '16:20', members: ['Anna', 'Boris', 'Clement'], color: 'blue', columnId: 0 },
    { id: 1, time: '16:20', members: ['Demian', 'Erick', 'Fedor'], color: 'grey', columnId: 1  },
    { id: 2, time: '16:20', members: ['George', 'Harold', 'Shindler'], color: 'pink', columnId: 2  },
  ];

  _columnsStorage: IColumn[] = [
    { id: 0, title: 'Понедельник' },
    { id: 1, title: 'Вторник' },
    { id: 2, title: 'Среда' },
  ];

  changeColumnTitleById(columnId, title){
    this._columnsStorage = this._columnsStorage.map((column, index) => {
      if(index == columnId){
        return {
          ...column,
          title
        }
      }

      return column
    })
  }

  createNewLessonCard(cardData) {
    this._lessonsStorage.push({...cardData, id: getRandomId()});
  }

  createNewColumn(title){
    if(this._columnsStorage.length < 7){
      this._columnsStorage.push({id: getRandomId(), title})
    }
  }

  deleteColumnById(columnId){
    this._columnsStorage = this._columnsStorage.filter((column) => column.id != columnId)
  }

  deleteLessonCard(cardId){
    const filterted = this._lessonsStorage.filter((lesson) => lesson.id != cardId);
    this._lessonsStorage = filterted;
  }

  getColumnsStorage() {
    return this._columnsStorage;
  }

  getColumnStorageById(columnId) {
    return this._columnsStorage.find((column) => column.id == columnId);
  }

  getLessonsStorage() {
    return this._lessonsStorage;
  }

  getLessonCardById(cardId) {
    return this._lessonsStorage.find((lesson) => lesson.id == cardId);
  }

  setStorage(value) {
    this._lessonsStorage = value;
  }

  setLessonCardById(cardId, value) {
    const mapped = this._lessonsStorage.map((lesson) => lesson.id == cardId ? value : lesson);
    this._lessonsStorage = mapped;
  }
}
