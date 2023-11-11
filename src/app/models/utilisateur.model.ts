export class Utilisateur {
    libelle: string;
    description: string;
    duree: string;
    dateCreation: string;
    utilisateurCreation: string;
    dateModification!: string;
    utilisateurModification: string;
    etat: string;

    constructor(){
        this.libelle="";
        this.description="";
        this.duree="";
        this.dateCreation= "";
        this.utilisateurCreation="";
        this.dateModification= "";
        this.utilisateurModification="";
        this.etat="";
    }

}