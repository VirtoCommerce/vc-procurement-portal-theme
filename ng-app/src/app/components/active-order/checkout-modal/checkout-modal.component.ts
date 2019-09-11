import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '@models/dto/icart';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent implements OnInit {
  @Input() cart: ICart;
  showOrderItems: boolean = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  toggleAccordion(event) {
    event.target.parentElement.classList.toggle('accordion__item--active');
  }

  toggleOrderDetails(event){
    event.target.parentElement.classList.toggle('accordion__item--active');
    this.showOrderItems = !this.showOrderItems;
  }

  checkout() {
    this.activeModal.close(true);
  }

  closeModal() {
    this.activeModal.dismiss();
  }


}
