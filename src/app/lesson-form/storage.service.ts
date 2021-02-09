import { Injectable } from '@angular/core';
import { ILesson } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  _storage: ILesson = {
    time: '16:20',
    members: ['Haxlet', 'Founfer', 'Shindler'],
  };

  getStorage() {
    return this._storage;
  }

  setStorage(value) {
    this._storage = value;
  }
}
