import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact.model';
import {SharedServiceService} from '../../services/shared-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contact = new Contact();
  formShow = false;
  contactArr: Contact[];
  index: number;

  constructor(private serv: SharedServiceService) { }

  ngOnInit() {
    this.serv.contactSub.subscribe( (res) => {
      this.contactArr = res;
    });
  }

  AddContact() {
    this.contact = new Contact();
    this.formShow = true;
  }

  DisplayForm(event) {
    this.formShow = false;
  }

  OpenUpdateContact(i: number, contact: Contact) {
    this.contact = contact;
    this.formShow = true;
    this.index = i;
  }

}
