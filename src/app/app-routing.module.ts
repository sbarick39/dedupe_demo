import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DedupeCustomerDetailsComponent } from './dedupe-customer-details/dedupe-customer-details.component';
import { DedupeCustomersComponent } from './dedupe-customers/dedupe-customers.component';
import { DedupeRecordsComponent } from './dedupe-records/dedupe-records.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent,pathMatch:'full' },
   { path: '', component: HomeComponent,pathMatch:'full', canActivate: [AuthGuard] },
   { path: 'home', component: HomeComponent,pathMatch:'full', canActivate: [AuthGuard] },
   { path: 'dedupecustomers', component: DedupeCustomersComponent,pathMatch:'full', canActivate: [AuthGuard] },
   { path: 'deduperecords', component: DedupeRecordsComponent,pathMatch:'full',canActivate: [AuthGuard] },
   { path: 'showdetails', component: DedupeCustomerDetailsComponent,canActivate: [AuthGuard] },
   {path:'search/:searchTerm',component:DedupeRecordsComponent},
  // { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'dedupecustomers', component: DedupeCustomersComponent },
  // { path: 'deduperecords', component: DedupeRecordsComponent },
  // otherwise redirect to home
  { path: '**',  component: HomeComponent,pathMatch:'full', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
