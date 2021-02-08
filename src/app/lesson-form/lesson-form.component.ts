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

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.form = this.storage.getStorage();
  }

  changeValueHandler({ target }, id) {
    this.form.members[id] = target.value;
  }

  addMemberHandler() {
    event.preventDefault();

    if (this.checkMembers()) {
      this.form.members.push('');
    }
  }

  checkMembers() {
    let members = this.form.members.concat();

    if (members.length > 10) {
      return false;
    }

    if (!members[members.length - 1]) {
      return false;
    }

    return true;
  }
}
