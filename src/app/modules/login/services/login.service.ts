import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url_bd = environment.url_bd;
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    body: {}
  };

  private currentUserSubject: BehaviorSubject<{}> = new BehaviorSubject({});
  private currentRouteSubject: BehaviorSubject<{}> = new BehaviorSubject({});
  public readonly currentUser: Observable<{}> = this.currentUserSubject.asObservable();
  public readonly currentRoute: Observable<{}> = this.currentRouteSubject.asObservable();

  constructor(private http: HttpClient, private route: Router, private cookieService: CookieService, private location: Location) { }

  login(loginForm: any): Observable<{}> {
    // let key = CryptoJS.AES.encrypt(loginForm.password, environment.secret_key_encryption).toString();
    // loginForm.password = key;
    return this.http.post<{}>(this.url_bd + "medicos", loginForm);
  }
}