import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

const medicoRoutes: Routes = [
  {path: "medico-login", component: LoginComponent}
];

@NgModule({
  declarations: [
    AgendaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(medicoRoutes, { relativeLinkResolution: 'legacy' })
  ]
})
export class MedicoModule { }
