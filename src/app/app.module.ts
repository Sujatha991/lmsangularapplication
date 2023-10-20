import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { LoanDashboardComponent } from './loan-dashboard/loan-dashboard.component';
// import { CreateLoanComponent } from './create-loan/create-loan.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CourseServiceService } from './course-service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseheaderComponent } from './courseheader/courseheader.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    CourseDashboardComponent,
    CreateCourseComponent,
    CourseheaderComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // NgbCarouselModule
  ],
  providers: [CourseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
