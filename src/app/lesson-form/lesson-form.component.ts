import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { GlobalStorageService } from '../globalStorage.service';
import { ILesson } from '../types/types';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.scss'],
})
export class LessonFormComponent implements OnInit {
  lessonId: number;
  columnId: number;
  isAddActive: boolean = true;
  currentRoute: string;

  form: ILesson = {
    time: '',
    members: [''],
    color: ''
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private _storage: GlobalStorageService
  ) {}

  ngOnInit(): void {
    this._route.url.subscribe((params) => this.currentRoute = params[0].path);

    if(this.currentRoute != 'create'){
      this._route.params.subscribe((params) => this.lessonId = params.id);
      this.form = this._storage.getLessonCardByIndex(this.lessonId);
    } else {
      this.lessonId = this._storage.getLessonCardLength();
      this._route.params.subscribe((params) => this.columnId = params.columnId);
    }
  }

  backClickHandler() {
    this._location.back();
  }

  saveClickHandler() {
    this._storage.setLessonCardByIndex(this.lessonId, this.form);

    if(this.currentRoute == 'create'){
      this._storage.addLessonCardIndexToColumn(this.columnId, this.lessonId);

    }

    this._router.navigate(['/shedule']);
  }

  changeTimeHandler({ target }) {
    this.form.time = target.value;
  }

  changeValueHandler({ target }, id) {
    this.form.members[id] = target.value;
  }

  addMemberHandler() {
    event.preventDefault();

    if (this.checkMembers()) {
      this.form.members.push('');
    }

    if (this.checkMembersCount(this.form.members, 11)) {
      this.isAddActive = false;
    }
  }

  checkMembers() {
    let members = this.form.members.concat();

    if (this.checkMembersCount(members, 11)) {
      return false;
    }

    if (!members[members.length - 1]) {
      return false;
    }

    return true;
  }

  checkMembersCount(membersArr, validCount) {
    if (membersArr.length > validCount - 1) {
      return true;
    }

    return false;
  }
}
