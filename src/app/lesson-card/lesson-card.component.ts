import { Component, Input, OnInit } from '@angular/core';

interface ICardData {
  time: string;
  surnames: string[];
}

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
})
export class LessonCardComponent implements OnInit {
  @Input() cardData: ICardData;

  ngOnInit(): void {
    console.log(this.cardData);
  }
}
