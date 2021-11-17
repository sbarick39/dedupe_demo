import { animate, state, style, transition, trigger } from '@angular/animations';
import {DedupefilterPipe} from '../pipe/dedupefilter.pipe'
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DedupeRecords } from '../models/dedupe-records';
import { User } from '../models/user';
import { AuthenticationService } from '../services/auth.service';
import { DedupeRecordsService } from '../services/dedupe-records.service';
import { DedupeCustomersService } from '../services/dedupe-customers.service';
import { SpinnerService } from '../services/spinner.service';
import { UserService } from '../services/user.service';



@Component({
    selector: 'dedupe-record',
    templateUrl: './dedupe-records.component.html',
    
})
export class DedupeRecordsComponent implements OnInit {
  @Output() event=new EventEmitter<any>()
    currentUser: User;
    dedupeRecords:any = [];
    data:any=[]
    displayedColumns: any = [];
    constructor(
        private authenticationService: AuthenticationService,
        private dedupeRecordsService: DedupeRecordsService,
        private dedupeCustomerservice:DedupeCustomersService,
        private route: Router,
        private activatedRoute:ActivatedRoute,
        public loder:SpinnerService,
        private user:UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }
    dedupedata:any
    ngOnInit() {
        this.loadAllDedupeRecords();
        // this.customerdata()
       // this.dedupedata=localStorage.getItem('dedupedata')
    }
    //if record is empty
    message:any
    private loadAllDedupeRecords() {
     if(JSON.parse(localStorage.getItem('dedupedata')||'{}').length === 0){
    this.message="Record Not found"
   console.log(this.message)
     }else{
      this.dedupedata= JSON.parse(localStorage.getItem('dedupedata')||'{}')
     }
    }
//search dedupe
filtername=''
//show  dedupeCustomer data

dedupeCustomer:any
datas:any
customerdata:any=[]
showData(index:any){
    localStorage.setItem('Customerindex',index)
   this.route.navigate(['/dedupecustomers'])
//    this.dedupeCustomerservice.sendMessage(this.dedupedata)

}


//pagination
page = 1;
count = 0;
tableSize = 7;
tableSizes = [3, 6, 9, 12];
totalRecords:any=JSON.parse(localStorage.getItem('dedupedata')||'{}').length



}
