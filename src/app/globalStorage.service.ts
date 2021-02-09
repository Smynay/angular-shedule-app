import { Injectable } from '@angular/core';
import { ILesson, IColumn } from './types/types';

@Injectable({
  providedIn: 'root',
})
export class GlobalStorageService {
  _lessonsStorage: ILesson[] = [
    { time: '16:20', members: ['Anna', 'Boris', 'Clement'] },
    { time: '16:20', members: ['Demian', 'Erick', 'Fedor'] },
    { time: '16:20', members: ['George', 'Harold', 'Shindler'] },
  ];

  _columnsStorage: IColumn[] = [
    { title: 'Понедельник', cardsIndexes: [0, 1, 2] },
    { title: 'Вторник', cardsIndexes: [2, 1, 1] },
    { title: 'Среда', cardsIndexes: [2, 1, 2] },
  ];

  createNewLessonCard(columnIndex) {
    const currentCardIndex = this._lessonsStorage.push({ time: '', members: [''] }) - 1;
    this._columnsStorage[columnIndex].cardsIndexes.push(currentCardIndex);

    return currentCardIndex;
  }

  createNewColumn(title){
    if(this._columnsStorage.length < 7){
      this._columnsStorage.push({title, cardsIndexes: []})
    }
  }

  deleteLessonCardById(index){
    this._lessonsStorage = this._lessonsStorage.filter((no, i) => i != index);
    const filtredColumns = this._columnsStorage.map((column) => ({title: column.title, cardsIndexes: column.cardsIndexes.filter(cardIndex => cardIndex != index)}));
    this._columnsStorage = filtredColumns;
  }

  getColumnsStorage() {
    return this._columnsStorage;
  }

  // Mb should delete this?
  getLessonsStorage() {
    return this._lessonsStorage;
  }

  getLessonCardByIndex(index) {
    return this._lessonsStorage[index];
  }

  setStorage(value) {
    this._lessonsStorage = value;
  }

  setLessonCardByIndex(index, value) {
    this._lessonsStorage[index] = value;
  }
}
