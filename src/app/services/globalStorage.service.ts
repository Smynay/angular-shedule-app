import { Injectable } from '@angular/core';
import { ILesson, IColumn } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class GlobalStorageService {
  _lessonsStorage: ILesson[] = [
    { time: '16:20', members: ['Anna', 'Boris', 'Clement'], color: 'blue' },
    { time: '16:20', members: ['Demian', 'Erick', 'Fedor'], color: 'grey'  },
    { time: '16:20', members: ['George', 'Harold', 'Shindler'], color: 'pink'  },
  ];

  _columnsStorage: IColumn[] = [
    { title: 'Понедельник', cardsIndexes: [0, 1, 2] },
    { title: 'Вторник', cardsIndexes: [2, 1, 1] },
    { title: 'Среда', cardsIndexes: [2, 1, 2] },
  ];

  addLessonCardIndexToColumn(columnIndex, cardIndex){
    this._columnsStorage = this._columnsStorage.map((column, index) => {
      if(index == columnIndex){
          return {
          ...column,
          cardsIndexes: [...column.cardsIndexes, cardIndex]
        }
      }

      return column
    })
  }

  changeColumnTitleById(columnIndex, title){
    this._columnsStorage = this._columnsStorage.map((column, index) => {
      if(index == columnIndex){
        return {
          ...column,
          title
        }
      }

      return column
    })
  }

  createNewLessonCard(columnIndex) {
    const currentCardIndex = this._lessonsStorage.push({ time: '', members: [''], color: '' }) - 1;
    this._columnsStorage[columnIndex].cardsIndexes.push(currentCardIndex);

    return currentCardIndex;
  }

  createNewColumn(title){
    if(this._columnsStorage.length < 7){
      this._columnsStorage.push({title, cardsIndexes: []})
    }
  }

  deleteColumnById(columnIndex){
    this._columnsStorage = this._columnsStorage.filter((no, index) => index != columnIndex)
  }

  deleteLessonCardFromColumnByIds(columnIndex, cardIndex){
    const filterted = this._columnsStorage.map((column, index) => {
      if(index == columnIndex){
        return {
          ...column,
          cardsIndexes: column.cardsIndexes.filter((index) =>
            index != cardIndex
          )
        }
      }

      return column
    })

    console.log(this.getColumnStorageById(columnIndex));
    this._columnsStorage = filterted;
  }

  getColumnsStorage() {
    return this._columnsStorage;
  }

  getColumnStorageById(index) {
    return this._columnsStorage[index];
  }

  // Mb should delete this?
  getLessonsStorage() {
    return this._lessonsStorage;
  }

  getLessonCardByIndex(index) {
    return this._lessonsStorage[index];
  }

  getLessonCardLength(){
    return this._lessonsStorage.length
  }

  setStorage(value) {
    this._lessonsStorage = value;
  }

  setLessonCardByIndex(index, value) {
    this._lessonsStorage[index] = value;
  }
}
