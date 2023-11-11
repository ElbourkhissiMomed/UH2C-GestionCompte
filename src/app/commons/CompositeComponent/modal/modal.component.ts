import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  @Input() data: any;
  @Input() title = 'Information';
  @Output() closeModalEvent = new EventEmitter<boolean>();
  notificationRejet: boolean;

  constructor(public activeModal: NgbActiveModal,private translate: TranslateService) { }

  ngOnInit() {
    
  }

  public closeModal() {
    this.activeModal.close('Closed');
  }


  public dismissModal() {
  
      this.activeModal.dismiss('Dismissed');
    
    
  }

  traduireMessageByCode(code: string): string {
    var translatedMessage = "";
    this.translate.get(code).subscribe((res: string) => {
      translatedMessage = res;
    });
    return translatedMessage;
  }

}
