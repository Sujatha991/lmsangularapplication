import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import Swal from 'sweetalert2';
import { CourseServiceService } from '../course-service.service';
import { SignupModel } from '../Models/SignupModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  submitted=false;
  hedValue="SignUp"
  Responsevalue:any;
  constructor(private formbuilder:FormBuilder,private _service:CourseServiceService,private _activatedroute:ActivatedRoute,private _router:Router,private toastr: ToastrService) { 
    this.signupForm=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
    });
  }

  ngOnInit(): void {
  }
  get f() { return this.signupForm.controls; }
  Signup(){
    debugger;
    if(this.signupForm.valid==false)
    {
    this.submitted=true;
    }
    else
    {
      this.signupForm.value.role=this.signupForm.value.role=="student"?2:1;
      const model=new SignupModel(this.signupForm.value.username,this.signupForm.value.password,this.signupForm.value.role);
      const loanrespone=this._service.SignUp(model).subscribe((data:SignupModel)=>{
        this.Responsevalue=data;
        if(this.Responsevalue>0)
        {
          this.signupForm.reset({});
          this.submitted=false;
          this.toastr.success('SignUp successfully', 'success');
          this._router.navigate(['/Login']);
          // Swal.fire("",'SignUp successfully','success').then(a=>{        
          //   this._router.navigate(['/Login']);
          //  });
        }
        else{

          // Swal.fire("",'SignUp Insuccess','error').then(a=>{        
          //  });
        }      
      },(error=>{
      //  Swal.fire("Sign Up",error,'error').then(a=>{        
        // });
      }));
    }
  }

  clear()
   {
     this.signupForm.reset({});
     this.submitted=false;
   }

}
