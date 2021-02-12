import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalStorageService } from '../services/globalStorage.service';
import { ILesson } from '../models/models';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
})
export class LessonCardComponent {
  @Input() cardData: ILesson;

  @Output() onCardDeleted = new EventEmitter();

  constructor(
    private _router: Router,
    private _storage: GlobalStorageService
  ) {}

  editClickHandler(): void {
    this._router.navigate(['/lesson', this.cardData.id]);
  }

  deleteClickHandler(): void {
    if (confirm('Действительно удалить?')) {
      this._storage.deleteLessonCard(this.cardData.id);
      this.onCardDeleted.emit(null);
    }
  }
}
