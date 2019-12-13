import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FavouritesComponent } from './components/favourites/favourites.component';


const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: '', redirectTo: 'contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
