import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor(private http:HttpClient) { }
  ApiUrl="https://esbuat.veritasfin.in:8060/FetchDedupeDetails"
  showCustomerDetails(branchName:any,rapidID:any,CustomerName:any,MobileNumber:any,customerCIF:any){
    let obj={
      "userId" : "",  
      "operationName" : "GetCustomerDetails",
      "branchName" : branchName,
      "areaName" : "",
      "rapidID" :rapidID,
      "CustomerName": CustomerName,
      "MobileNumber": MobileNumber,
      "customerCIF" : customerCIF
  }
  return this.http.post(this.ApiUrl,obj)
}
}
