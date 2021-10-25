import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private userSubject: BehaviorSubject<User>;
  //public user: Observable<User>;
  url = 'https://localhost:44305/api/Users';
  constructor(private router: Router,
    private http: HttpClient) {
      let ll = localStorage.getItem('user');
      //this.userSubject = new BehaviorSubject<User>(JSON.parse());
        //this.user = this.userSubject.asObservable();
     }

    //  login(username : any, password: any) {
    //   return this.http.post<User>(this.url, { username, password })
    //       .pipe(map(user => {
    //           // store user details and jwt token in local storage to keep user logged in between page refreshes
    //           localStorage.setItem('user', JSON.stringify(user));
    //           this.userSubject.next(user);
    //           return user;
    //       }));

    /*getUsers(): Observable<User[]> {
      //return this.http.get<User[]>(this.url);
      return this.http.get<User[]>(this.url)
    .pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
    }
  */

  find(email: string): Observable<User>{
    return this.http.get<User>(this.url + `/${email}`);
  }

  findUser(user: User): Observable<User> {
    return this.http.get<User>(this.url + `/${user.id}`);
  }



  getUser(email: string): Observable<User> {
    const url = `${this.url}/${email}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user email=${email}`)),
      catchError(this.handleError<User>(`getUser email=${email}`))
    );
  }

  log(arg0: string): void {
    throw new Error('Method not implemented.');
  }
  handleError<T>(arg0: string): (err: any, caught: Observable<User>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
/*
  find(home: Home): Observable<Home> {
    return this.httpClient.get<Home>(this.url + `/${home.id}`);
  }
*/
  // logout() {
  //   // remove user from local storage and set current user to null
  //   localStorage.removeItem('user');
  //   this.userSubject.next(null);
  //   this.router.navigate(['/account/login']);

}
