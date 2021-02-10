import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SheduleComponent } from './shedule/shedule.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';

const routes: Routes = [
  { path: 'shedule', component: SheduleComponent },
  { path: 'create/:columnId', component: LessonFormComponent },
  { path: 'lesson/:id', component: LessonFormComponent },
  { path: '', redirectTo: '/shedule', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
