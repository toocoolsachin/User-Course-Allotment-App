import { Injectable } from '@angular/core';
import { User } from '../components/add-user/user-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  addUser(user: User) {
    return this.http.post<any>(`${this.url}`, user);
  }

  listUsers() {
    return this.http.get(`${this.url}`);
  }

  editUser(id) {
    return this.http.get(`${this.url}/edit/${id}`);
  }

  updateUser(user: User, id) {
    return this.http.post<User>(`${this.url}/update/${id}`, user);
  }

  deleteUser(id) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
