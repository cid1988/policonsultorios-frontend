import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoconsultaService {

  url_bd = environment.url_bd;
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    body: {}
  };

  constructor(private http: HttpClient) { }

  login(videoconsulta: any): Observable<{}> {
    return this.http.post<{}>(this.url_bd + "videoconsulta", videoconsulta);
  }
}
