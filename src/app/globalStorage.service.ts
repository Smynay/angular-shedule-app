import { Injectable } from '@angular/core';
import { ILesson } from './types/types';

@Injectable({
  providedIn: 'root',
})
export class GlobalStorageService {
  _storage: ILesson[] = [
    { time: '16:20', members: ['Anna', 'Boris', 'Clement'] },
    { time: '16:20', members: ['Demian', 'Erick', 'Fedor'] },
    { time: '16:20', members: ['George', 'Harold', 'Shindler'] },
  ];

  getStorage() {
    return this._storage;
  }

  getLessonCardByIndex(index) {
    return this._storage[index];
  }

  setStorage(value) {
    this._storage = value;
  }
}
