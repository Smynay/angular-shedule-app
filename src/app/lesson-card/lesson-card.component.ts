import { Component, Input, OnInit } from '@angular/core';
import { ILesson } from '../types/types';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
})
export class LessonCardComponent implements OnInit {
  @Input() cardData: ILesson;

  ngOnInit(): void {
    console.log(this.cardData);
  }
}
