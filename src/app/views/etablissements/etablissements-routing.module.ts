import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtablissementsListComponent } from './etablissements-list/etablissements-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: EtablissementsListComponent,
    data: {
      title: `Liste Etablisssment`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtablissementsRoutingModule { }
