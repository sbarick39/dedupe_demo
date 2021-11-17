import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    apiUrl = 'https://esbuat.veritasfin.in:8060/searchUser';


    // dummyData = {
    //     "firstname": "Hemant",
    //     "lastname": "Kumar",
    //     "userid": "hemantk",
    //     "phoneNmb": "9665993250",
    //     "Designation": "Software developer",
    //     "product": null,
    //     "email": "hemantk@leotechnosoft.net",
    //     "manager": "Nalini Singh",
    //     "department": "Java Developers",
    //     "branchId": null,
    //     "area": "Magarpatta",
    //     "region": "Pune",
    //     "ho": null,
    //     "state": "Maharashtra",
    //     "zone": null,
    //     "status": "Active"
    // };

    getAll(userId:any,) {
     
       const obj1={
        "SearchUserRequest": {
            "msgHdr": {
                "tnxId": "2021052912000000001",
                "source": "LMS"
            },
            "msgBdy": {
                "userid":userId
            }
        }
        }
      
        return this.http.post(`${this.apiUrl}`,obj1)
        // return this.http.get<User[]>(`${this.apiUrl}`);
    }
}