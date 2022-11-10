import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  url_bd = environment.url_bd;
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    body: {}
  };

  constructor(private http: HttpClient) { }

  login(loginForm: any): Observable<{}> {
    return this.http.post<{}>(this.url_bd + "medicos", loginForm);
  }
}
