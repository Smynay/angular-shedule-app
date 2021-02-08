import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss'],
})
export class SheduleComponent implements OnInit {
  cardData = [
    {
      time: '16:20',
      surnames: [
        'Лебовски',
        'Питчер',
        'Паркер',
        'Иванов',
        'Рукра',
        'Зорев',
        'Кумеш',
        'Степанов',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
