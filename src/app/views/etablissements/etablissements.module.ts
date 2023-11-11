import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtablissementsRoutingModule } from '../etablissements/etablissements-routing.module';
import { EtablissementsAjoutComponent } from '../etablissements/etablissements-ajout/etablissements-ajout.component';
import { EtablissementsListComponent } from '../etablissements/etablissements-list/etablissements-list.component';

@NgModule({
  declarations: [EtablissementsAjoutComponent, EtablissementsListComponent],
  imports: [
    CommonModule,
    EtablissementsRoutingModule
  ]
})
export class EtablissementsModule { }
