import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './components/forum/forum.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { LoginetudiantComponent } from './components/loginetudiant/loginetudiant.component';
import { LoginenseignantComponent } from './components/loginenseignant/loginenseignant.component';
import { EnseignantdashboardComponent } from './components/enseignantdashboard/enseignantdashboard.component';
import { EtudiantdashboardComponent } from './components/etudiantdashboard/etudiantdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { EnseignantnavbarComponent } from './components/enseignantnavbar/enseignantnavbar.component';
import { EtudiantnavbarComponent } from './components/etudiantnavbar/etudiantnavbar.component';
import { CreationetudiantComponent } from './components/creationetudiant/creationetudiant.component';
import { TouslesetudiantsComponent } from './components/touslesetudiants/touslesetudiants.component';
import { DetailsetudiantComponent } from './components/detailsetudiant/detailsetudiant.component';
import { ModifieretudiantComponent } from './components/modifieretudiant/modifieretudiant.component';
import { CreationenseignantComponent } from './components/creationenseignant/creationenseignant.component';
import { TouslesenseignantsComponent } from './components/touslesenseignants/touslesenseignants.component';
import { ModifierenseignantComponent } from './components/modifierenseignant/modifierenseignant.component';
import { DetailsenseignantComponent } from './components/detailsenseignant/detailsenseignant.component';
import { SaisienotesComponent } from './components/saisienotes/saisienotes.component';
import { CorrigernotesComponent } from './components/corrigernotes/corrigernotes.component';
import { TouslesreclamationsComponent } from './components/touslesreclamations/touslesreclamations.component';
import { TraiterreclamationComponent } from './components/traiterreclamation/traiterreclamation.component';
import { FairereclamationComponent } from './components/fairereclamation/fairereclamation.component';
import { PlanningComponent } from './components/planning/planning.component';
import { TouslesnotesComponent } from './components/touslesnotes/touslesnotes.component';
import { TouslesabsencesComponent } from './components/touslesabsences/touslesabsences.component';
import { TouslescoursComponent } from './components/touslescours/touslescours.component';
import { DeposercoursComponent } from './components/deposercours/deposercours.component';
import { FaireappelComponent } from './components/faireappel/faireappel.component';
import { HttpClientModule } from '@angular/common/http';
import { LineBreakPipePipe } from './pipes/line-break-pipe.pipe';
import { TouslesclassesComponent } from './components/touslesclasses/touslesclasses.component';
import { CreationclasseComponent } from './components/creationclasse/creationclasse.component';
import { MesreclamationsComponent } from './components/mesreclamations/mesreclamations.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    LoginadminComponent,
    LoginetudiantComponent,
    LoginenseignantComponent,
    EnseignantdashboardComponent,
    EtudiantdashboardComponent,
    AdmindashboardComponent,
    NavbarComponent,
    FooterComponent,
    EnseignantnavbarComponent,
    EtudiantnavbarComponent,
    CreationetudiantComponent,
    TouslesetudiantsComponent,
    DetailsetudiantComponent,
    ModifieretudiantComponent,
    CreationenseignantComponent,
    TouslesenseignantsComponent,
    ModifierenseignantComponent,
    DetailsenseignantComponent,
    SaisienotesComponent,
    CorrigernotesComponent,
    TouslesreclamationsComponent,
    TraiterreclamationComponent,
    FairereclamationComponent,
    PlanningComponent,
    TouslesnotesComponent,
    TouslesabsencesComponent,
    TouslescoursComponent,
    DeposercoursComponent,
    FaireappelComponent,
    LineBreakPipePipe,
    TouslesclassesComponent,
    CreationclasseComponent,
    MesreclamationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
