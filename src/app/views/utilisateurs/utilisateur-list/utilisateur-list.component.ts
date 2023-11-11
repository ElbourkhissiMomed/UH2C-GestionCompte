import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../../models/Utilisateur.model';
import { FenetreModalService } from '../../../services/FenetreModalService';
@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.scss']
})
export class UtilisateurListComponent implements OnInit {


  profils: any;
  users: any;
  status: any ;
  message = "";
  totalElements: number = 0;
  numberPages: number = 0;
  currentPageNumber: number = 1;
  actif: string = "";
  reponseService: any;
  messageErreur: any;
  nom: string = "";
  prenom: string = "";
  profil: any = null;
  listHub: any;
  listFiliale: any;
  listRatt: any;
  hub: any = null;
  filiale: any = null;
  rattachement: any = null;
  alertStyle: string = "";
  userView: any = null;
  rattGeographic: string = '';
  searchParams: any = null;
  profilId?: number;
  loginUser?: string;
  pageSize:any = 10;
  hasFullCtrl?: boolean;
  numberOfElements: number = 0;
  specialCharacters = ["'", "-" , "é","è","à","ô"];
  profondeur?: number;
  constructor( ){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  listTypeUtilisateur: Utilisateur=new Utilisateur();
  Utilisateur=[
    { libelle: 'Etudiant', description: 'etudiant dans UH2', duree: 'etudiant dans UH2',
     dateCreation: '22-8-2023', utilisateurCreation: 'etudiant dans UH2'
     ,dateModification: '22-10-2023', utilisateurModification: 'etudiant dans UH2',etat:1},
    { libelle: 'Enseignant', description: 'Enseignant dans UH2'
    , duree: 'etudiant dans UH2',
    dateCreation: '22-10-2023', utilisateurCreation: 'etudiant dans UH2'
    ,dateModification: '22-12-2023', utilisateurModification: 'etudiant dans UH2',etat:1},
    { libelle: 'partenair', description: 'Enseignant dans UH2'
    , duree: 'etudiant dans UH2',
    dateCreation: '22-10-2023', utilisateurCreation: 'etudiant dans UH2'
    ,dateModification: '22-12-2023', utilisateurModification: 'etudiant dans UH2',etat:1},
    { libelle: 'stagiaire', description: 'Enseignant dans UH2'
    , duree: 'etudiant dans UH2',
    dateCreation: '22-10-2023', utilisateurCreation: 'etudiant dans UH2'
    ,dateModification: '22-12-2023', utilisateurModification: 'etudiant dans UH2',etat:1},
    { libelle: 'admlinistrateur', description: 'Enseignant dans UH2'
    , duree: 'etudiant dans UH2',
    dateCreation: '22-10-2023', utilisateurCreation: 'etudiant dans UH2'
    ,dateModification: '22-12-2023', utilisateurModification: 'etudiant dans UH2',etat:1},
  ];



/* loadAddUpdateForm(newData: Boolean, user: Utilisateur) {
  var title = newData ? 'Nouveau utilisateur': 'Modifier utilisateur';
  this.fenetreModalService.openModalDetails(title, UserAddUpdateComponent, user, true, 'lg')
    .then((data) => this.updateListFromAdd(data)).catch((data) => {});
} */

}
