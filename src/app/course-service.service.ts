import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { UserModel } from './Models/UserModel';
import { CourseModel } from './Models/CourseModel';
import { StudentModel } from './Models/Studentmodel';
import { SignupModel } from './Models/SignupModel';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private _http:HttpClient) { }
  Url:String="https://coursewareservice20231018143135.azurewebsites.net/api";
  url1:String="https://signinservice20231019125128.azurewebsites.net/api";
  // url1:String=environment.baseurl;
  
  role:any="";
  
  getCourses() :Observable<CourseModel[]>
  {
    const url=`${this.Url}/Course/GetAllCourses`
    this.role=localStorage.getItem('Token');
    let header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.role}`
    );
    return this._http.get<CourseModel[]>(url,{headers:header}).pipe(catchError(this.errorHandler));
  }

  SaveCoursedetails(coursemdl:CourseModel) : Observable<CourseModel>
  {
    const url=`${this.Url}/Course/AddCourse`
    this.role=localStorage.getItem('Token');
    return this._http.post<CourseModel>(url,coursemdl,{
      headers:new HttpHeaders({'Content-Type':'application/json'}).set(
        "Authorization",
        `Bearer ${this.role}`
      )})
      .pipe(catchError(this.errorHandler));
  }

  updateCourseDetails(updcourse:CourseModel):Observable<CourseModel>
  {
    const url=`${this.Url}/Course/UpdateCourse`
    return this._http.put<CourseModel>(url,updcourse,{
      headers:new HttpHeaders({'Content-Type':'application/json'}).set(
        "Authorization",
        `Bearer ${this.role}`
      )}).pipe(catchError(this.errorHandler));
  }

  getCoursedetailsbyid(id:any):Observable<CourseModel>
  {
    const url=`${this.Url}/Course/GetCourseByID/${id}`
    this.role=localStorage.getItem('Token');
    let header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.role}`
    );
    return this._http.get<CourseModel>(url,{headers:header}).pipe(catchError(this.errorHandler));
  }

  StudentEnroll(id:string):Observable<StudentModel>
  {
    debugger;
    const userid:any=localStorage.getItem('Userid');
    const usename:any= localStorage.getItem('username');
    const model=new StudentModel(0,userid,usename,id.toString());
    const url=`${this.Url}/StudentEnrollement/EnrollStudent`
    return this._http.post<StudentModel>(url,model,{
      headers:new HttpHeaders({'Content-Type':'application/json'}).set(
        "Authorization",
        `Bearer ${this.role}`
      )}).pipe(catchError(this.errorHandler));
  }

  Login(model:UserModel) : Observable<UserModel>
  {
    const url=`${this.url1}/User/Signin`
    return this._http.post<UserModel>(url,model,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).pipe(catchError(this.errorHandler));
  }

  SignUp(signupmodel:SignupModel) :Observable<SignupModel>
  {
    const url=`${this.url1}/User/SignUp`
    console.log(signupmodel)
    return this._http.post<SignupModel>(url,signupmodel,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).pipe(catchError(this.errorHandler));
  }



  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error.message||"Unknow Server Error");
  }
}
