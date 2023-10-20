import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseheader',
  templateUrl: './courseheader.component.html',
  styleUrls: ['./courseheader.component.css']
})
export class CourseheaderComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private _router:Router) { }
  Username:any="";
  ngOnInit() {
    this.Username=localStorage.getItem('username');
  }
  Logout()
  {
    localStorage.clear();
    this._router.navigate(['/Login']);
  }

}
