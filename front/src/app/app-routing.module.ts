import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCatalogeComponent } from './admin/admin-cataloge/admin-cataloge.component';
import { AdminProduitComponent } from './admin/admin-produit/admin-produit.component';
import { AjoutClientComponent } from './admin/ajout-client/ajout-client.component';
import { EditCatalogeComponent } from './admin/edit-cataloge/edit-cataloge.component';
import { EditProduitComponent } from './admin/edit-produit/edit-produit.component';
import { PageAccueilComponent } from './admin/page-accueil/page-accueil.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CommandeComponent } from './client/commande/commande.component';
import { CommanderComponent } from './client/commander/commander.component';
import { EditProfilComponent } from './client/edit-profil/edit-profil.component';
import { HomeClientComponent } from './client/home-client/home-client.component';
import { PanierComponent } from './client/panier/panier.component';
import { CommunicationComponent } from './communication/communication.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path : 'home'  , component : HomeComponent},
  { path : 'login'  , component : LoginComponent},
  { path : 'register'  , component : RegisterComponent},
  { path : 'cataloge/:id'  , component : CategorieComponent},
  { path : 'produit/:id'  , component : ProduitComponent},
  { path : 'client'  , component : HomeClientComponent},
  { path : 'client/panier'  , component : PanierComponent},
  { path : 'client/commande'  , component : CommanderComponent},
  { path : 'client/edit-profil'  , component : EditProfilComponent},
  { path : 'admin'  , component : AdminCatalogeComponent},
  { path : 'admin/cataloge'  , component : AdminCatalogeComponent},
  { path : 'admin/cataloge/:id'  , component : EditCatalogeComponent},
  { path : 'admin/produit'  , component : AdminProduitComponent},
  { path : 'admin/produit/:id'  , component : EditProduitComponent},
  { path : 'admin/client'  , component : AjoutClientComponent},
  { path : 'admin/communication'  , component : CommunicationComponent},
  { path : 'client/commande/:id'  , component : CommandeComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
