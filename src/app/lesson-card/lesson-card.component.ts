import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILesson } from '../types/types';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
})
export class LessonCardComponent implements OnInit {
  @Input() cardData: ILesson;
  @Input() cardIndex: number;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    console.log(this.cardData);
  }

  editClickHandler() {
    this._router.navigate(['/lesson', this.cardIndex]);
  }
}
