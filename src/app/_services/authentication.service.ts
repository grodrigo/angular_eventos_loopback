import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    login(username: string, email: string, password: string ) {
        return this.http.post<any>(environment.backendUrl+'/Users/login', { username: username, email:email, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.id) {
                    user["username"]= username;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log(user);

                }

                return user;
            }));
    }

    logout() {
        console.log("loginout");
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}