import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact.model';
import {SharedServiceService} from '../../services/shared-service.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

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

  OpenUpdateContact(i: number, contact: Contact) {
    this.contact = contact;
    this.formShow = true;
    this.index = i;
  }

  DisplayForm(event) {
    this.formShow = false;
  }

}
