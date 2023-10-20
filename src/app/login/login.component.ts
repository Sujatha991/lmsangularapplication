import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
// import Swal from 'sweetalert2';
import { CourseServiceService } from '../course-service.service';
import { UserModel } from '../Models/UserModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false;
  loginresponse:any;
  constructor(private formbuilder:FormBuilder,private route:Router,private _service:CourseServiceService,private _router:Router,private toastr: ToastrService) 
  {
     this.loginForm=this.formbuilder.group({
         username :['',Validators.required],
         password:['',Validators.required]
     });
  }
  get f() { return this.loginForm.controls; }
  get userName() {
    return this.loginForm.get('username');
} 

  ngOnInit(){
  }

  Clear()
  {
    this.submitted=false;
    this.loginForm.reset({});
  }
  get loginData(){
    return this.loginForm.controls;
  }
  onLogin(from:any)
  {
    if(this.loginForm.valid==false)
    {
    this.submitted=true;
    }
    else
    {
      const model=new UserModel(this.loginForm.value.username,this.loginForm.value.password,0);
      this._service.Login(model).subscribe((data:UserModel)=>{
       console.log(data);
       this.loginresponse=data;
       console.log(this.loginresponse.success);
       if(this.loginresponse.id>0)
       {
        localStorage.setItem('Userid',this.loginresponse.id);
        localStorage.setItem('Role',this.loginresponse.roleId);
        localStorage.setItem('Token',this.loginresponse.token);
        localStorage.setItem('username',this.loginresponse.userName);
        this.route.navigate(['/CourseDashboard']);
       }
       else{
        this.toastr.error('UserName or Password Incorrect!!', 'error');
        this.loginForm.reset({});
        //  Swal.fire('LMS Application','UserName or Password Incorrect!!','error');
       }
      },(error)=>{
        // this.toastr.error(error, 'error');
        this.toastr.error('UserName or Password Incorrect!!', 'error');
        this.loginForm.reset({});
        // Swal.fire("LMS Application!!",error,'error');
      });
      
    }
    console.log(this.loginForm)
  }
}
