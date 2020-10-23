import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router,  } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-additeam',
  templateUrl: './additeam.component.html',
  styleUrls: ['./additeam.component.css']
})
export class AdditeamComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,public httpclient:HttpClient,private Routes:Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', [Validators.required]]
      });
  }
public userdata=[];
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
public adddata=[]
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      if (this.registerForm.valid) {
          

     let  dataurl='http://localhost:3000/posts'
     const formData=new FormData();
         
    this.httpclient.post<any>(dataurl,this.registerForm.value).subscribe((response=>{ this. userdata = response } ) );
    this.Routes.navigate(['iteamdata'])
 
  }
  }
}
