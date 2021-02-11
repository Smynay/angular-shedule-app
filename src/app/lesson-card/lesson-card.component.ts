import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ILesson } from '../types/types';
import { GlobalStorageService } from '../services/globalStorage.service';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
})
export class LessonCardComponent implements OnInit {
  @Input() cardData: ILesson;

  @Output() onCardDeleted = new EventEmitter();

  constructor(private _router: Router, private _storage: GlobalStorageService) {}

  ngOnInit(): void {
    console.log(this.cardData.id);
  }

  editClickHandler() {
    this._router.navigate(['/lesson', this.cardData.id]);
  }

  deleteClickHandler(){
    if(confirm('Действительно удалить?')){
      this._storage.deleteLessonCard(this.cardData.id);
      this.onCardDeleted.emit(null)
    }
  }
}
