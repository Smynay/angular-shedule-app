import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ILesson } from '../models/models';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
})
export class LessonCardComponent {
  @Input() cardData: ILesson;
  @Output() onCardEvent = new EventEmitter();

  editClickHandler(): void {
    this.onCardEvent.emit({ action: 'edit', cardId: this.cardData.id});
  }

  deleteClickHandler(): void {
    this.onCardEvent.emit({ action: 'delete', cardId: this.cardData.id});
  }
}
