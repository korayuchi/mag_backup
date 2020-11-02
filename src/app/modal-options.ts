import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-modal-options',
  templateUrl: './modal-options.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalOptions {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  // openBackDropCustomClass(content) {
  //   this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  // }

  // openWindowCustomClass(content) {
  //   this.modalService.open(content, { windowClass: 'dark-modal' });
  // }

 // openSm(content) {
  //  this.modalService.open(content, { size: 'sm' });
 // }

 openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
     this.modalService.open(content, { centered: true });
   }
}
