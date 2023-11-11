import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { Injectable } from "@angular/core";
import { FenetreConfirmationComponent } from "../commons/CompositeComponent/fenetre-confirmation/fenetre-confirmation.component";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class FenetreModalService {

  constructor(private modalService: NgbModal, private translate: TranslateService) { }

  /**
   * Ouvrir  la fenêtre de confirmation 
   * @param message 
   * @param btnOkText 
   * @param btnCancelText 
   * @param dialogSize 
   */
  public confirm(title: string, message: string, btnOkText: string = this.traduireMessageByCode('oui'), btnCancelText: string = this.traduireMessageByCode('non'), dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
    let modalOptions: NgbModalOptions = {};
    modalOptions.backdrop = 'static';
    modalOptions.centered = true;
    modalOptions.size = dialogSize;
    const modalRef = this.modalService.open(FenetreConfirmationComponent, modalOptions);

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }

  /**
   * Ouvrir une fenêtre modale
   * @param titre 
   * @param component 
   * @param data 
   * @param centered 
   * @param size 
   */
  public openModalDetails(titre: string, component: any, data: any, centered: boolean = true, sizeModal: 'lg' | 'sm' = 'sm'): Promise<any> {
    let modalOptions: NgbModalOptions = {};
    modalOptions.backdrop = 'static';
    modalOptions.keyboard = false;
    modalOptions.centered = centered;
    modalOptions.size = sizeModal;
    const modalRef = this.modalService.open(component, modalOptions);
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.title = titre;
    return modalRef.result;
  }

  /**
 * Ouvrir une fenêtre modale
 * @param titre 
 * @param component 
 * @param data 
 * @param centered 
 * @param size 
 */
  public openModalDetailsModeEdit(titre: string, component: any, data: any, centered: boolean = true, sizeModal: 'lg' | 'sm' = 'sm'): Promise<any> {
    let modalOptions: NgbModalOptions = {};
    modalOptions.backdrop = 'static';
    modalOptions.centered = centered;
    modalOptions.size = sizeModal;
    const modalRef = this.modalService.open(component, modalOptions);
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.title = titre;
    modalRef.componentInstance.modeEdit = true;
    return modalRef.result;
  }

  /**
   * Traduire un message by code
   * @param code 
   */
  traduireMessageByCode(code: string): string {
    var translatedMessage = '';
    this.translate.get(code).subscribe((res: string) => {
      translatedMessage = res;
    });
    return translatedMessage;
  }

}

