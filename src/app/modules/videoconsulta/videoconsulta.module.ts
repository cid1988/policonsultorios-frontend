import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoconsultaComponent } from './components/videoconsulta/videoconsulta.component';
import { RouterModule, Routes } from '@angular/router';

const videoconsultaRoutes: Routes = [
  {path: "videoconsultas", component: VideoconsultaComponent}
];

@NgModule({
  declarations: [
    VideoconsultaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(videoconsultaRoutes, { relativeLinkResolution: 'legacy' })
  ]
})
export class VideoconsultaModule { }
