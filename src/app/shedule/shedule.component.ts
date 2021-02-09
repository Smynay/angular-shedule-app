import { Component, OnInit } from '@angular/core';
import { GlobalStorageService } from '../globalStorage.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss'],
})
export class SheduleComponent implements OnInit {
  cardsData;

  constructor(private storage: GlobalStorageService) {}

  ngOnInit(): void {
    this.cardsData = this.storage.getStorage();
  }
}
