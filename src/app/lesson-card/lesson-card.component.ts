import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ILesson } from '../types/types';
import { GlobalStorageService } from './../globalStorage.service';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
})
export class LessonCardComponent implements OnInit {
  @Input() cardData: ILesson;
  @Input() cardIndex: number;
  @Input() columnIndex: number;

  @Output() onCardDeleted = new EventEmitter();

  constructor(private _router: Router, private _storage: GlobalStorageService) {}

  ngOnInit(): void {
  }

  editClickHandler() {
    this._router.navigate(['/lesson', this.cardIndex]);
  }

  deleteClickHandler(){
    if(confirm('Действительно удалить?')){
      this._storage.deleteLessonCardFromColumnByIds(this.columnIndex, this.cardIndex);
      this.onCardDeleted.emit(null)
    }
  }
}
