import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

import {SharedServiceService} from './services/shared-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FavouritesComponent,
    ContactFormComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
