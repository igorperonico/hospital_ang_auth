import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/auth'

  constructor(private http: HttpClient) { }

  login(login: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, login)
  }

  register(register: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, register)
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {})
  }
}
