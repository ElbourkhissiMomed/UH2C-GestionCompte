import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Input } from "@angular/core";

@Component({
  selector: 'app-fenetre-confirmation',
  templateUrl: './fenetre-confirmation.component.html'
})
export class FenetreConfirmationComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private activeModal: NgbActiveModal) { 
    this.title ="";
    this.message ="";
    this.btnOkText ="";
    this.btnCancelText ="";
  }

  ngOnInit() {
    
  }
  
  public decline() {
    this.activeModal.close(false);
  }
  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
