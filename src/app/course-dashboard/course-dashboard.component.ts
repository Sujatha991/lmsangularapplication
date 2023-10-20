import { Component, OnInit } from '@angular/core';
import { FormBuilder,Form } from '@angular/forms';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';
import { CourseServiceService } from '../course-service.service';
import { StudentModel } from '../Models/Studentmodel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent implements OnInit {
  Courselist:any=[];
  todisplay=false;
  todisplayone=false;
  public errMsg:any;
  Studentenrollresponse:any;
  role:any="";
  constructor(private _loanservice:CourseServiceService,private _router:Router,private _frombuilder:FormBuilder,private toastr: ToastrService) { 
  
  }

  ngOnInit() {
    this.role=localStorage.getItem('Role');
    if(this.role!=1)
    {
      this.todisplay=true;
    }
    else
    {
      this.todisplayone=true;
    }
    this.GetCourseList();
  }

  GetCourseList()
  {
    this._loanservice.getCourses().subscribe(a=>{    
      this.Courselist=a;
    },(error)=>{
      // Swal.fire("Loan Dashboard!!",error,'error');
      this.Courselist.data=0;
    });
  }

  EditCourse(Id:any)
  { 
   this._router.navigate(['/UpdateCourse',Id]);
  }

  StudentEnroll(Id:string)
  {
    
    // Swal.fire({
    //   title:'Are you sure want to enroll this course?',
    //   text :'Course Details!!',
    //   icon :'warning',
    //   showCancelButton:true,
    //   confirmButtonText:'Yes, Enroll!',
    //   cancelButtonText:'Cancel'
    // }).then((response:any)=>{
    //   if(response.value)
    //   {
    //     debugger;
    //   this._loanservice.StudentEnroll(Id).subscribe((data:StudentModel)=>{
    //     this.Studentenrollresponse=data;
    //       if(this.Studentenrollresponse.success==true)
    //       {
    //         this.toastr.success(this.Studentenrollresponse.message, 'success');
    //         // Swal.fire("Course",this.Studentenrollresponse.message,'success').then(a=>{});
    //       }
    //       else{
    //         this.toastr.error(this.Studentenrollresponse.message, 'error');
    //         // Swal.fire("Course",this.Studentenrollresponse.message,'error').then(a=>{});
    //       }
    //  },(error=>{
    //   this.toastr.error(this.Studentenrollresponse.message, 'error');
    //   // Swal.fire("Course",error,'error').then(a=>{        
    //   //  });
    //  }));   
    //   }
    // })
  }
  
  AddnewCourse()
  {
    this._router.navigate(['/createCourse'])
  }

}
