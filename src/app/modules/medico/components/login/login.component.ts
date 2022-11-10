import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicoService } from '../../services/medico.service';

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

  constructor(private fb: FormBuilder, private route: Router, private medicoService: MedicoService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:any) {
    if(loginForm.valid){
      this.medicoService.login(loginForm.value).subscribe(
        (user: any) => {
          console.log(user)
          // this.route.navigate(['perfil']);
        },
        err => {
          // this.userValid = err;
        }
      )
    }
  }
}
