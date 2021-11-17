import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<User>;
    apiUrl = 'https://esbuat.veritasfin.in:8060/authenticateUser';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(userid: any, password: any) {
		const headers = new Headers; 
        const obj = {
            "AuthenticateUserRequest":{
              "msgHdr":{
                "txnID":"LMS202105291200000001",
                "timestamp":"2021-05-29T12:00:00.000+05:30",
                "source":"LMS"
              },
              "msgBdy":{
                "userId": userid,
                "password": password
              }
            }
          }
		
		let header = new HttpHeaders();
        header.set('Access-Control-Allow-Origin', '*');
		header.set('Content-Type', 'application/json');
        header.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');	
        header.set('Access-Control-Request-Headers', 'access-control-allow-methods,access-control-allow-origin,authorization,content-type');
        header.set('Access-Control-Allow-Headers', 'access-control-allow-methods,access-control-allow-origin,authorization,content-type');
		
        return this.http.post<any>(`${this.apiUrl}`, obj)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    private send=new Subject<any>()
    public sends$=this.send.asObservable()
    sendMessage(message:any){
      this.send.next(message)
    }
}