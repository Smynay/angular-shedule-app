import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule } from '@angular/forms';

import { LessonCardComponent } from '../lesson-card/lesson-card.component';
import { SheduleComponent } from '../shedule/shedule.component';
import { LessonFormComponent } from '../lesson-form/lesson-form.component';
import { SheduleColumnComponent } from '../shedule-column/shedule-column.component';

const Components = [
  LessonCardComponent,
  SheduleComponent,
  LessonFormComponent,
  SheduleColumnComponent
];

@NgModule({
  declarations: [ Components ],
  imports: [ AppMaterialModule, FormsModule ]
})
export class AppComponentsModule { }
