import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const afiliadoRoutes: Routes = [
  // {path: "medico", component: PerfilMedicoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(afiliadoRoutes, { relativeLinkResolution: 'legacy' })
  ]
})
export class AfiliadoModule { }
