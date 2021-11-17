import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { AfterViewInit } from '@angular/core';


@Component({ templateUrl: 'login.component.html',selector:"app-login" })
export class LoginComponent implements OnInit   {
    loginForm: any = null;
    loading = false;
    submitted = false;
    returnUrl = null;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private user:UserService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
       
    }
   
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            
        });
      
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
       
    } 
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {  
                   
     if(data.AuthenticateUserResponse.msgBdy.msg ==='Failure' && data.AuthenticateUserResponse.msgHdr.ErrorDesc === 'Username or password is invalid'){
     
        this.invaliduser="Invalid Credentials"
        this.loading=false
    }else if(data.AuthenticateUserResponse.msgBdy.msg ==='Success'){

        this.showAcmandRcm();
    }        
                },
                error => {
                    this.loading = false;
                });
                // this.showAcmandRcm()
    }
   
   //ACM AND RCM
   authdata:any
   message:any
   invaliduser:any
    showAcmandRcm(){
     this.user.getAll(this.f.username.value).subscribe((res)=>{
        //  console.log(res)
      
      this.authdata=res
    //  console.log(this.authdata)
     if((this.authdata.SearchUserResponse.msgBdy.Response.Designation == 'ACM'  || this.authdata.SearchUserResponse.msgBdy.Response.Designation == 'RCM')){
         localStorage.setItem("searchdata",JSON.stringify(this.authdata.SearchUserResponse.msgBdy.Response))
        this.router.navigate([this.returnUrl]);
  //{queryParams:{...this.authdata.SearchUserResponse.msgBdy.Response},queryParamsHandling :null}
     }
     else{
        this.message="Unauthorised User"
        this.loading=false
     }
      this.send(this.authdata) 
     })  
    }
    //send search Api data to home component
 send(data:any){
     this.authenticationService.sendMessage(data)
    // console.log(data)
 }  
}