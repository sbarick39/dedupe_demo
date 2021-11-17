import { Component, OnInit } from '@angular/core';
import { showLoading } from '../models/spinner.model';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  showloading:any=false
  


}
