import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetailsService } from '../services/customer-details.service';

@Component({
  selector: 'app-dedupe-customer-details',
  templateUrl: './dedupe-customer-details.component.html',
  styleUrls: ['./dedupe-customer-details.component.scss']
})
export class DedupeCustomerDetailsComponent implements OnInit {

  constructor(private showCustomerDetails:CustomerDetailsService,
    private router:Router) { }
Details:any
  ngOnInit(): void {
    
    this.showDetails()
    
    this.Details=JSON.parse(localStorage.getItem('customerDetails')||'{}')
  }
//show Customer More Details
details:any=[]
  Id:any= "";
  operationNames:any ="GetCustomerDetails";
  branchNames :any= "SALEM";
  areaName :any= "";
  rapid_ID :any="RAPID_0001_3319521";
  CustomerNames:any ="KANDASAMY GOVINDAN";
  MobileNumbers:any= "9876543210";
  customerCIF:any= "3600" ;
 showDetails(){
 this.showCustomerDetails.showCustomerDetails(this.Id,this.operationNames,this.branchNames,this.areaName,this.rapid_ID,).subscribe(data=>{
     console.log(data)
     this.details.push(data)
     console.log(this.details)
 })
 }
 back(){
   this.router.navigate(['/dedupecustomers'])
 }


}
