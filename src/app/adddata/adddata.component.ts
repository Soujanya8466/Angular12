import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from 'protractor';
// import 'rxjs/add/operator/filter';







@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor(public httpclient:HttpClient) { }
  displayedColumns: string[] = ['id', 'name', 'description', 'price','delete'];
  public userdata=[];


  deletiteam(userdataa){
    alert(" you  deleted the iteam")
    let userurl='http://localhost:3000/posts/'+userdataa.id
    
    this.httpclient.delete<any>(userurl).subscribe(
      (response=>{  } ) );
      window.location.reload();

    
  }
  dataSource = this.userdata;

  ngOnInit() {
    
    let userurl='http://localhost:3000/posts'
    
    this.httpclient.get<any>(userurl).subscribe(
      (response=>{ this. userdata = response;
      console.log(this.userdata)
      } ) );

}

}
