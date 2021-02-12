import { Injectable } from '@angular/core';

import { ILesson, IColumn } from '../models/models';
import { getRandomId } from '../utils/randomId';

@Injectable({
  providedIn: 'root',
})
export class GlobalStorageService {
  _lessonsStorage: ILesson[] = [
    {
      id: 0,
      time: '16:20',
      members: [
        'Абрамович',
        'Рохманов',
        'Куфман',
        'Чирингашвили',
        'Кочубор',
        'Сташешен',
        'Максим',
        'Брахманчук',
        'Игнатьева'
      ],
      color: 'blue',
      columnId: 0,
    },
    {
      id: 1,
      time: '16:20',
      members: ['Demian', 'Erick', 'Fedor'],
      color: 'grey',
      columnId: 1,
    },
    {
      id: 2,
      time: '16:20',
      members: ['George', 'Harold', 'Shindler'],
      color: 'pink',
      columnId: 2,
    },
  ];

  _columnsStorage: IColumn[] = [
    { id: 0, title: 'Понедельник' },
    { id: 1, title: 'Вторник' },
    { id: 2, title: 'Среда' },
  ];

  changeColumnTitleById(columnId: number, title: string): void {
    let columnIndex = this._columnsStorage.findIndex((column) => column.id == columnId);
    this._columnsStorage[columnIndex] = {...this._columnsStorage[columnIndex], title};
  }

  changeLessonCardById(cardId: number, cardData: ILesson): void {
    this._lessonsStorage[
      this._lessonsStorage.findIndex((lesson) => lesson.id == cardId)
    ] = cardData;
  }

  createNewLessonCard(cardData: ILesson): void {
    this._lessonsStorage.push({ ...cardData, id: getRandomId() });
  }

  createNewColumn(title: string): void {
    if (this._columnsStorage.length < 7) {
      this._columnsStorage.push({ id: getRandomId(), title });
    }
  }

  deleteColumnById(columnId: number): void {
    this._columnsStorage.splice(
      this._columnsStorage.findIndex((column) => column.id == columnId), 1
    );
  }

  deleteLessonCard(cardId: number): void {
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
}
