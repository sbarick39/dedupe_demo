import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dedupefilter'
})
export class DedupefilterPipe implements PipeTransform {

  transform(value: any, searchitem:any):any {
   if(!value || !searchitem){
     return value;
   }else{
   return value.filter(function(emp:any){
    const RAPID_ID= emp.RAPID_ID.toString().includes(searchitem) 
    const CustomerName = emp.CustomerName.toLowerCase().includes(searchitem.toLowerCase());
    const BranchName =emp.BranchName.toLowerCase().includes(searchitem.toLowerCase());
    const SchemeName =emp.SchemeName.toLowerCase().includes(searchitem.toLowerCase());
     const MobileNumbe=emp.SchemeName.toLowerCase().includes(searchitem.toLowerCase())
     const CustomerType=emp.CustomerType.toLowerCase().includes(searchitem.toLowerCase())
    return (RAPID_ID+ CustomerName+BranchName+SchemeName+MobileNumbe+CustomerType)
   })
   }
  
  }

}
