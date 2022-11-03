import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms' ;
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { NavbarClientComponent } from './client/navbar-client/navbar-client.component';
import { PanierComponent } from './client/panier/panier.component';
import { HomeClientComponent } from './client/home-client/home-client.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ContenuComponent } from './contenu/contenu.component';
import { CommanderComponent } from './client/commander/commander.component';
import { EditProfilComponent } from './client/edit-profil/edit-profil.component';
import { AjoutAdminComponent } from './admin/ajout-admin/ajout-admin.component';
import { AjoutClientComponent } from './admin/ajout-client/ajout-client.component';
import { AjoutProduitComponent } from './admin/ajout-produit/ajout-produit.component';
import { AjoutCategorieComponent } from './admin/ajout-categorie/ajout-categorie.component';
import { PageAccueilComponent } from './admin/page-accueil/page-accueil.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { AdminCatalogeComponent } from './admin/admin-cataloge/admin-cataloge.component';
import { AdminProduitComponent } from './admin/admin-produit/admin-produit.component';
import { AdminProduitDetailsComponent } from './admin/admin-produit-details/admin-produit-details.component';
import {CalendarModule} from 'primeng/calendar';
import { EditCatalogeComponent } from './admin/edit-cataloge/edit-cataloge.component';
import { EditProduitComponent } from './admin/edit-produit/edit-produit.component';
import { CommandeComponent } from './client/commande/commande.component';
import { CommunicationComponent } from './communication/communication.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CategorieComponent,
    ProduitComponent,
    NavbarClientComponent,
    PanierComponent,
    HomeClientComponent,
    ContenuComponent,
    CommanderComponent,
    EditProfilComponent,
    AjoutAdminComponent,
    AjoutClientComponent,
    AjoutProduitComponent,
    AjoutCategorieComponent,
    PageAccueilComponent,
    NavbarAdminComponent,
    AdminCatalogeComponent,
    AdminProduitComponent,
    AdminProduitDetailsComponent,
    EditCatalogeComponent,
    EditProduitComponent,
    CommandeComponent,
    CommunicationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    MatBadgeModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
