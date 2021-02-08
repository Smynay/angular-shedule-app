import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.scss'],
})
export class LessonFormComponent implements OnInit {
  form = {
    time: '',
    members: [''],
  };

  isAddActive = true;

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.form = this.storage.getStorage();
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
