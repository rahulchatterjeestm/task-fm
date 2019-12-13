import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {Contact} from '../../models/contact.model';
import {SharedServiceService} from '../../services/shared-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() contact: Contact;
  @Input() index: number; // for updating contact

  @Output() showForm = new EventEmitter();

  btnTxt = 'ADD';
  constructor(private serv: SharedServiceService) { }

  ngOnInit() {
    if (this.contact.name !== undefined) {
      this.btnTxt = 'UPDATE';
    }
  }

  CloseForm() {
    this.showForm.emit('false');
  }

  OnSubmit() {
    if (this.btnTxt === 'ADD') {
      this.serv.AddContact(this.contact);
      this.showForm.emit('false');
    } else {
      this.serv.UpdateContact(this.index, this.contact);
      this.showForm.emit('false');
    }
  }

}
