import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: UtilisateurListComponent,
    data: {
      title: `Liste Utilisateur`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateursRoutingModule { }
