import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import Swal from 'sweetalert2';
import { CourseServiceService } from '../course-service.service';
import { CourseModel } from '../Models/CourseModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  creatCourseForm : FormGroup;
  submitted=false;
  CourseID:any=0;
  hedValue=""
  toAdddisplay=false;
  toUpdatedisplay=true;
  loanDetailsresponse:any;
   constructor(private formbuilder:FormBuilder,private _service:CourseServiceService,private _activatedroute:ActivatedRoute,private _router:Router,private toastr: ToastrService)
    {
        this.creatCourseForm=this.formbuilder.group({
          coursename:['',Validators.required],
          tag:['',Validators.required],
          category:['',Validators.required],
          subcategory:['',Validators.required],
        });
    }
 
   ngOnInit(){
     this.CourseID=parseInt(this._activatedroute.snapshot.paramMap.get('id')||'')
 
     if(parseInt(this.CourseID))
     {
       debugger;
      this.hedValue="Update Course"
      this.toAdddisplay=true;
      this.toUpdatedisplay=false;
      this.getCoursedetailsbyid(this.CourseID);
     }
     else
     {
       this.hedValue="New Course"
       this.toAdddisplay=false;
       this.toUpdatedisplay=true;
     }
   }
 
   clear()
   {
     this.creatCourseForm.reset({});
     this.submitted=false;
   }
   get f() { return this.creatCourseForm.controls; }
   AddCourse(from:any)
   {
      if(this.creatCourseForm.valid===false)
      {
        this.submitted=true;
      }
      else
      {
        const model=new CourseModel(0,this.creatCourseForm.value.coursename,this.creatCourseForm.value.tag,this.creatCourseForm.value.category,this.creatCourseForm.value.subcategory);
        const loanrespone=this._service.SaveCoursedetails(model).subscribe((data:CourseModel)=>{
         this.creatCourseForm.reset({});
         this.submitted=false;
         this.toastr.success('Course Added successfully', 'success');
         this._router.navigate(['/CourseDashboard']);
        //  Swal.fire("Course Details",'Added successfully','success').then(a=>{        
        //    this._router.navigate(['/CourseDashboard']);
        //   });
        },(error=>{
          this.toastr.error(error, 'error');
        //  Swal.fire("Course Details",error,'error').then(a=>{        
        //   });
        }));       
      }
   }
 
   getCoursedetailsbyid(id:any)
   {
     this._service.getCoursedetailsbyid(id).subscribe(a=>{
       this.loanDetailsresponse=a;
       this.creatCourseForm.setValue({
        coursename:this.loanDetailsresponse.data.courseName,
        tag:this.loanDetailsresponse.data.tag,
        category:this.loanDetailsresponse.data.category,
        subcategory:this.loanDetailsresponse.data.subCategory
       });
     },(error)=>{
      //  Swal.fire('Loan Details!!',error,'error');
     });
   }
 
   UpdateCourse(from:any)
   {
     debugger;
      if(this.creatCourseForm.valid==false)
      {  
        this.submitted=true;
      }
      else
      {
       const model=new CourseModel(this.CourseID,this.creatCourseForm.value.coursename,this.creatCourseForm.value.tag,this.creatCourseForm.value.category,this.creatCourseForm.value.subcategory);
       this._service.updateCourseDetails(model).subscribe((data:CourseModel)=>{
         this.creatCourseForm.reset({});
         this.submitted=false;
         this.toastr.success('Course Updated successfully', 'success');
         this._router.navigate(['/CourseDashboard']);
        //  Swal.fire("Course Details",'Updated successfully','success').then(a=>{        
        //    this._router.navigate(['/CourseDashboard']);
        //  });
       },(error=>{
        this.toastr.error(error, 'error');
        //  Swal.fire("Course Details",error,'error').then(a=>{        
        //   });
        }));
       
      }

}
}
