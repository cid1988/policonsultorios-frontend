import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MedicoService } from 'src/app/modules/medico/services/medico.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private cookieService: CookieService, private router: Router, private loginService: MedicoService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = this.cookieService.get("token");

    let request = req;
    if (idToken) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ idToken }`
        }
      });
    }else{
      this.router.navigateByUrl('/login');
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        }
        return throwError( err );
      })
    );
  }
}