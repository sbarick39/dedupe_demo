import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { dupnotdup } from '../models/dupnotdup.model';

import { User } from '../models/user';
import { AuthenticationService } from '../services/auth.service';
import { CustomerDetailsService } from '../services/customer-details.service';
import { DedupeCustomersService } from '../services/dedupe-customers.service';
import { DuplicateNotduplicateService } from '../services/duplicate-notduplicate.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
    selector: 'dedupe-customers',
    templateUrl: `./dedupe-customers.component.html`
})
export class DedupeCustomersComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
        private dedupeCustomersService: DedupeCustomersService,
        private showCustomerDetails: CustomerDetailsService,
        private route: ActivatedRoute,
        private router: Router,
        private duplicatenotDuplicate: DuplicateNotduplicateService,
        public loder: SpinnerService
    ) {
    }

    customerData: any = []
    dedupedata: any;
    indexres: any
    getDedupeRecord: any
    getsearchData: any

    ngOnInit() {
        // this.loadAllDedupeRecords();
        // this.showDetails()
        // this.dedupeCustomersService.subject.subscribe((data)=>{
        //     console.log(data)
        //     this.customerData.push(data)
        // })
        this.dedupedata = JSON.parse(localStorage.getItem('dedupedata') || '{}')
        this.dedupeCustomerData()
        //   this.route.queryParams.subscribe(res=>{
        //      this.indexres=+res.i
        //   })
        this.indexres = JSON.parse(localStorage.getItem('Customerindex') || '{}')
        this.getDedupeRecord = JSON.parse(localStorage.getItem('dedupedata') || '{}')
        this.getsearchData = JSON.parse(localStorage.getItem('searchdata') || '{}')

    }
    customerdata: any = []
    dedupeCustomerData() {
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem('dedupedata') || '{}')) {
             
                this.dedupedata.forEach((d: any, index: any) => {
                    if (index === +this.indexres) {
                        this.dedupeCustomersService.getAllDedupeCustomers(d.BranchName, d.RAPID_ID, d.CustomerName, d.MobileNumber).subscribe(res => {
                            
                            this.customerdata.push(res)
                            // localStorage.setItem("dedupeCustomer",JSON.stringify(this.customerdata))
                        })
                    }
                })
            }
        }, 10)
    }

    showMore(customerdata: any) {
        if (JSON.parse(localStorage.getItem('dedupedata') || '{}')) {
            this.dedupedata.forEach((d: any, index: any) => {
                if (index === +this.indexres) {
                    this.showCustomerDetails.showCustomerDetails(d.BranchName, d.RAPID_ID, d.CustomerName, d.MobileNumber, customerdata.cif).subscribe(res => {
                        localStorage.setItem("customerDetails", JSON.stringify(res))
                    })
                }
            })
        }
        this.router.navigate(['/showdetails'],)
    }
    //back
    back() {
        this.router.navigate(['./dedupecustomers'])
    }

    //duplicate and not duplicate
    // dupicatenotduplicate:any
    response: any
    message:any
    showDuplicate(customerdata: any) {
        
        this.getDedupeRecord.forEach((data: any, index: any) => {
            if (this.getDedupeRecord) {
                debugger
                this.duplicatenotDuplicate.Duplicate(this.getsearchData.userid, 'Dedupe', data.BranchName, data.RAPID_ID, data.CustomerName, data.CustomerType, data.MobileNumber, 'DUPLICATE', customerdata.cif).subscribe((res: any) => {
                    this.response = res
                    console.log(res)
                    debugger
                     this.message=res.message;
                    
                })
                //  localStorage.removeItem('dedupedata')
            }
            this.router.navigate(['./home'])
        })
        
    }


    notDuplicate(customerdata: any) {
        this.getDedupeRecord.forEach((data: any, index: any) => {
            if (this.getDedupeRecord) {
                this.duplicatenotDuplicate.Duplicate(this.getsearchData.userid, 'Dedupe', data.BranchName, data.RAPID_ID, data.CustomerName, data.CustomerType, data.MobileNumber, 'NOT-DUPLICATE', customerdata.cif).subscribe((res: any) => {
                    this.response = res
                    console.log(res)
                    this.message=res.message
                    // alert(this.message)
                })
                // localStorage.removeItem('dedupedata')
                this.router.navigate(['/home'])
            }
           
        }) 
    }
    // disabled Duplicate and Not Duplicate
    click:any=true
    btndisabled(){
      this.click=false
    }
}
