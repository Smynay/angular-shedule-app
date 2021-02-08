import { Injectable } from '@angular/core';

export interface ILesson {
  time: string;
  members: string[];
}

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
