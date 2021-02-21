import { Injectable } from '@angular/core';

import { ILesson, IColumn, IMember } from '../models/models';
import { getRandomId } from '../utils/randomId';

@Injectable({
  providedIn: 'root',
})

//TODO: this should be not used anywhere except ApiService
export class GlobalStorageService {
  _lessonsStorage: ILesson[] = [
    {
      id: 0,
      time: '16:20',
      members: [
        {name :'Абрамович'},
        {name :'Рохманов'},
        {name :'Куфман'},
        {name :'Чирингашвили'},
        {name :'Кочубор'},
        {name :'Сташешен'},
        {name :'Максим'},
        {name :'Брахманчук'},
        {name :'Игнатьева'},
      ],
      color: 'blue',
      columnId: 0,
    },
    {
      id: 1,
      time: '16:20',
      members: [
        {name: 'Demian'},
        {name: 'Erick'},
        {name: 'Fedor'}
      ],
      color: 'grey',
      columnId: 1,
    },
    {
      id: 2,
      time: '16:20',
      members: [
        {name: 'George' },
        {name: 'Harold' },
        {name: 'Shindler'}
      ],
      color: 'pink',
      columnId: 2,
    },
  ];

  _columnsStorage: IColumn[] = [
    { id: 0, title: 'Понедельник' },
    { id: 1, title: 'Вторник' },
    { id: 2, title: 'Среда' },
    { id: 3, title: 'Четверг' },
    { id: 4, title: 'Пятница' },
    { id: 5, title: 'Суббота' },
    { id: 6, title: 'Воскресенье' }
  ];

  changeLessonCardById(cardId: number, cardData: ILesson): void {
    this._lessonsStorage[
      this._lessonsStorage.findIndex((lesson) => lesson.id == cardId)
    ] = cardData;
  }

  changeLessonCardColumnById(cardId: number, columnId: number): void {
    let updatedCard = { ...this._lessonsStorage.find((lesson) => lesson.id == cardId), columnId };
    this._lessonsStorage[this._lessonsStorage.findIndex((lesson) => lesson.id == cardId)] = updatedCard;
  }

  createNewLessonCard(cardData: ILesson): void {
    this._lessonsStorage.push({ ...cardData, id: getRandomId() });
  }

  deleteLessonCard(cardId: number) {
    this._lessonsStorage.splice(
      this._lessonsStorage.findIndex((lesson) => lesson.id == cardId), 1
    );
  }

  getColumnsStorage(): IColumn[] {
    return this._columnsStorage;
  }

  getColumnStorageById(columnId: number): IColumn {
    return this._columnsStorage.find((column) => column.id == columnId);
  }

  getLessonsStorage(): ILesson[] {
    return this._lessonsStorage;
  }

  getLessonCardById(cardId: number): ILesson {
    return this._lessonsStorage.find((lesson) => lesson.id == cardId);
  }

  getCardsByColumnId(columnId: number): ILesson[] {
    return this._lessonsStorage.filter(x => x.columnId == columnId);
  }
}
