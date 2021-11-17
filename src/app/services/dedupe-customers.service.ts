import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DedupeCustomers } from '../models/dedupe-customers';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DedupeCustomersService {
    constructor(private http: HttpClient) { }


    apiUrl = 'https://esbuat.veritasfin.in:8060/FetchDedupeDetails';

    getAllDedupeCustomers(branchName:any,rapidID:any,CustomerName:any,MobileNumber:any) {
    
      const obj={
        "userId" : "",  
        "operationName" :"FetchDedupeCustomers" ,
        "branchName" : branchName,
        "areaName" : "",
        "rapidID" :rapidID,
        "CustomerName": CustomerName,
        "MobileNumber": MobileNumber,
        "customerCIF" : "" 
        }
         return this.http.post(this.apiUrl,obj);
    }
    subject=new BehaviorSubject<any>('')
   // currentMessage = this.subject.asObservable();
    sendMessage(message: any) {
      this.subject.next(message)
    }
}