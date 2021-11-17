import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DedupeRecords } from '../models/dedupe-records';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DedupeRecordsService {
    constructor(private http: HttpClient) { }

    customerdata:any=new Subject();
    
    sendDataToOtherComponent(somedata:any){
        this.customerdata.next(somedata);
    }
  

    apiUrl = 'https://esbuat.veritasfin.in:8060/FetchDedupeDetails';

    
    getDedupeRecords(userId:any,areaName:any) {
        let obj={
            "userId" : userId,  
            "operationName" : "Login",
            "branchName" : "",
            "areaName" : areaName,
            "rapidID" :"",
            "customerCIF" : "" ,
            "CustomerName":"",
            "MobileNumber":"",
            
                
        }
        //return this.dummyData;
         return this.http.post(this.apiUrl,obj);
    }
}
//userId:any,operationName:any ,branchName:any, areaName:any,rapidID:any,customerCIF:any,CustomerName:any, MobileNumber:any