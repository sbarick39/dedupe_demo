import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DedupeCustomersComponent } from './dedupe-customers/dedupe-customers.component';
import { DedupeRecordsComponent } from './dedupe-records/dedupe-records.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/auth.service';
import { DedupeCustomersService } from './services/dedupe-customers.service';
import { DedupeRecordsService } from './services/dedupe-records.service';
import { UserService } from './services/user.service';
import { DedupefilterPipe } from './pipe/dedupefilter.pipe';
import { CustomerDetailsService } from './services/customer-details.service';
import { DedupeCustomerDetailsComponent } from './dedupe-customer-details/dedupe-customer-details.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SpinnerService } from './services/spinner.service';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DedupeRecordsComponent,
    DedupeCustomersComponent,
    DedupefilterPipe,
    DedupeCustomerDetailsComponent,
    LoadingSpinnerComponent,
    TableComponent,
 
 
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [AuthenticationService, UserService,
     CustomerDetailsService,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
