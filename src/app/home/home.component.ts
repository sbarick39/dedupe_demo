import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user';
import { AuthenticationService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ViewChild,AfterViewInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { DedupeRecordsService } from '../services/dedupe-records.service';

@Component({ templateUrl: './home.component.html' })
export class HomeComponent implements OnInit {
    @ViewChild(LoginComponent) login !:LoginComponent
    currentUser: any;
    users: any[] = [];
    username = '';
   

    dataSource= new MatTableDataSource(this.users);
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private dedupeRecord:DedupeRecordsService,
        private route:ActivatedRoute
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }
// searchdata:any=[]
searchdata:any
    ngOnInit() {

      this.searchdata= JSON.parse(localStorage.getItem('searchdata')||'{}');
       console.log(this.searchdata)
         this.dedupe()
    }
    //deduperecord
dedupe(){
    this.dedupeRecord.getDedupeRecords(this.searchdata.userid,this.searchdata.area).subscribe((res:any)=>{
       localStorage.setItem("dedupedata",JSON.stringify(res))
    })
}
}