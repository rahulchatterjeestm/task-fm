import { Injectable } from '@angular/core';
import {Contact} from '../models/contact.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  contacts: Contact[];

  contactSub = new BehaviorSubject<Contact[]>([]);

  constructor() {
    const contactArrStr = localStorage.getItem('contacts');
    this.contacts = contactArrStr == null ? [] : JSON.parse(contactArrStr);
    this.contactSub.next(this.contacts);
  }

  MakeFav(index: number, contact: Contact) {
    this.contacts[index] = contact;
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  AddContact(contact: Contact) {
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    this.contactSub.next(this.contacts);
  }

  UpdateContact(index: number, contact: Contact) {
    this.contacts[index] = contact;
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

}
