import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { UtilisateurAjoutComponent } from '../utilisateurs/utilisateur-ajout/utilisateur-ajout.component';
import { UtilisateurListComponent } from '../utilisateurs/utilisateur-list/utilisateur-list.component';

@NgModule({
  declarations: [UtilisateurAjoutComponent, UtilisateurListComponent],
  imports: [
    CommonModule,
    UtilisateursRoutingModule
  ]
})
export class UtilisateursModule { }
