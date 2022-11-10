import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultaComponent } from './components/consulta/consulta.component';

const medicoRoutes: Routes = [
  {path: "medico-login", component: LoginComponent},
  {path: "medico-agenda", component: AgendaComponent}
];

@NgModule({
  declarations: [
    AgendaComponent,
    LoginComponent,
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    RouterModule.forRoot(medicoRoutes, { relativeLinkResolution: 'legacy' })
  ]
})
export class MedicoModule { }
