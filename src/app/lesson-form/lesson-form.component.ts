import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { GlobalStorageService } from '../services/globalStorage.service';
import { ApiService } from '../services/api.service';
import { ILesson, IMember } from '../models/models';

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
    id: 0,
    time: '',
    members: [],
    color: '',
    columnId: 0,
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private _storage: GlobalStorageService,
    private _apiservice: ApiService
  ) {}

  async ngOnInit(){
    this.currentRoute = this._route.snapshot.url[0].path;

    if (this.currentRoute != 'create') {
      this.lessonId = this._route.snapshot.params.id;
      const card = await this._apiservice.getCard(this.lessonId)
      this.form = Object.assign({}, card);

    } else {
      this.columnId = this._route.snapshot.params.columnId;
      this.form.columnId = this.columnId;
    }
  }

  backClickHandler() {
    this._location.back();
  }

  saveClickHandler() {
    if (this.currentRoute != 'create') {
      this._storage.changeLessonCardById(this.form.id, this.form); //TODO : use _apiservice

    } else {
      this._storage.createNewLessonCard(this.form); //TODO : use _apiservice
    }

    this._router.navigate(['/shedule']);
  }

  changeTimeHandler({ target }: any) { //TODO: use ngModel instead
    this.form.time = target.value;
  }

  addMemberHandler() { // TODO: fix bug. when add new members, they are saved even without save button click
    event.preventDefault();

    if (this.canAddNewMember()) {
      this.form.members.push({ name: ""});
    }

    if (this.isMemberCountExceedLimit(this.form.members, 11)) {
      this.isAddActive = false;
    }
  }

  private canAddNewMember(): boolean {
    let members = this.form.members;

    if (this.isMemberCountExceedLimit(members, 11)) {
      return false;
    }

    const lastMember = members[members.length - 1];    

    if (lastMember.name == null || lastMember.name == "") {
      return false;
    }

    return true;
  }

  private isMemberCountExceedLimit(membersArr: IMember[], validCount: number): boolean {
    return membersArr.length > validCount - 1;
  }
}
