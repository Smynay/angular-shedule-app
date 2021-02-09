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
  form: ILesson;
  lessonId: number;
  isAddActive: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private _storage: GlobalStorageService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => (this.lessonId = params.id));
    this.form = this._storage.getLessonCardByIndex(this.lessonId);
  }

  backClicked() {
    this._location.back();
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
