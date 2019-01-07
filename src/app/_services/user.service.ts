import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_model/User';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

    url: string; // e.g. "http://localhost:3000/items";
  
    constructor(private http: HttpClient) { 
      this.url = environment.backendUrl + "/Users";
    }

    getAll() {
        return this.http.get<User[]>(this.url);
    }

    getById(id: number) {
        return this.http.get(this.url+'/' + id);
    }

    register(user: User) {
        return this.http.post(this.url, user);
    }

    update(user: User) {
        return this.http.put(this.url+'/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.url+'/' + id);
    }
}