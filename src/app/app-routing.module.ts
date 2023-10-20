import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CourseheaderComponent } from './courseheader/courseheader.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
SignupComponent


const routes: Routes = [
  {path:'',component:AppComponent,children:[{path:'',component:LoginComponent}]},
  {path:'createCourse',component:CreateCourseComponent},
  {path:'UpdateCourse/:id',component:CreateCourseComponent},
  {path:'CourseDashboard',component:CourseDashboardComponent},
  {path:'header',component:CourseheaderComponent},
  {path:'Login',component:LoginComponent},
  {path:'SignUp',component:SignupComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
