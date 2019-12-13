import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import {SharedServiceService} from '../../services/shared-service.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact;
  @Input() index: number;

  constructor(private serv: SharedServiceService) { }

  ngOnInit() {
  }

  Makefav() {
    this.contact.isFavourite = !this.contact.isFavourite;
    this.serv.MakeFav(this.index, this.contact);
  }

}
