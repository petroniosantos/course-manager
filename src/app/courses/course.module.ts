import { ReplacePipe } from './../pipe/replace.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { NgModule } from "@angular/core";
import { CourseInfoComponent } from './course-info.component';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent,
  ], imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule {

}
