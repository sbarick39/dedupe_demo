import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuplicateNotduplicateService {

  constructor(private http:HttpClient) { }
  ApiUrl="https://esbuat.veritasfin.in:8060/UpdateDedupeDetails"
  

 Duplicate(userId:any,operationName:any,branchName:any,rapid_ID:any,customerName:any,CustomerType:any,mobileNumber:any,dedupeType:any,dedupeCIF:any){
  const obj={

    "userId" : userId,  
   "operationName" : operationName,
   "branchName" : branchName,
   "rapidID" :rapid_ID,
   "customerName" : customerName,
   "CustomerType" : CustomerType,
   "mobileNumber" : mobileNumber,
   "dedupeType" : dedupeType,
   "dedupeCIF" : dedupeCIF
  }
return this.http.post(this.ApiUrl,obj)
 }
}
