import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilMedicoComponent } from './components/perfil-medico.component';
import { RouterModule, Routes } from '@angular/router';

const perfilMedicosRoutes: Routes = [
  {path: "perfil", component: PerfilMedicoComponent}
];

@NgModule({
  declarations: [PerfilMedicoComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(perfilMedicosRoutes, { relativeLinkResolution: 'legacy' })
  ]
})
export class PerfilMedicoModule { }
