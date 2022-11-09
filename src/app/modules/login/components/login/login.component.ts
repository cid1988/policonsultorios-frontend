import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userValid: any;
  loginForm = this.fb.group({
    cuit: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService, private cookieService: CookieService) { }

  ngOnInit(): void {
    // const userCookie = this.cookieService.get('user');
    // if(userCookie){
    //   this.route.navigate(['perfil'])
    // }
  }

  onSubmit(loginForm:any) {
    if(loginForm.valid){
      this.loginService.login(loginForm.value).subscribe(
        (user: any) => {
          this.cookieService.put('username', user.nombre)
          this.route.navigate(['perfil']);
        },
        err => {
          this.userValid = err;
        }
      )
    }
  }
}
