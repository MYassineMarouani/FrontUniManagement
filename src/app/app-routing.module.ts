import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { LoginetudiantComponent } from './components/loginetudiant/loginetudiant.component';
import { LoginenseignantComponent } from './components/loginenseignant/loginenseignant.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ForumComponent } from './components/forum/forum.component';
import { EtudiantdashboardComponent } from './components/etudiantdashboard/etudiantdashboard.component';
import { EnseignantdashboardComponent } from './components/enseignantdashboard/enseignantdashboard.component';
import { DetailsetudiantComponent } from './components/detailsetudiant/detailsetudiant.component';
import { ModifieretudiantComponent } from './components/modifieretudiant/modifieretudiant.component';
import { TouslesenseignantsComponent } from './components/touslesenseignants/touslesenseignants.component';
import { CreationenseignantComponent } from './components/creationenseignant/creationenseignant.component';
import { DetailsenseignantComponent } from './components/detailsenseignant/detailsenseignant.component';
import { ModifierenseignantComponent } from './components/modifierenseignant/modifierenseignant.component';
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
import { TouslesetudiantsComponent } from './components/touslesetudiants/touslesetudiants.component';
import { CreationetudiantComponent } from './components/creationetudiant/creationetudiant.component';


const routes: Routes = [
  {path:'',component:LoginadminComponent},
  {path:'LoginEtudiant',component:LoginetudiantComponent},
  {path:'LoginEnseignant',component:LoginenseignantComponent},
  {path:'admindashboard',component:AdmindashboardComponent , children : [
    {path:'',component:ForumComponent},
    {path:'forum',component:ForumComponent},
    // supprimer / modifier / details / notes 
    {path:'touslesetudiants',component:TouslesetudiantsComponent},
    {path:'creationetudiant',component:CreationetudiantComponent},
    {path:'detailsetudiant/:_id',component:DetailsetudiantComponent},
    {path:'modifieretudiant/:_id',component:ModifieretudiantComponent},
    {path:'toueslesenseignant',component:TouslesenseignantsComponent},
    {path:'creationenseignant',component:CreationenseignantComponent},
    {path:'detailsenseignant/:_id',component:DetailsenseignantComponent},
    {path:'modifierenseignant/:_id',component:ModifierenseignantComponent},
    {path:'saisienotes',component:SaisienotesComponent},
    // corriger notes par id etudiant
    {path:'corrigernotes/:_id',component:CorrigernotesComponent},
    {path:'touslesreclamations',component:TouslesreclamationsComponent},
    {path:'traiterreclamation/:_id',component:TraiterreclamationComponent},

  ] },
  {path:'Etudiantdashboard',component:EtudiantdashboardComponent , children : [
    {path:'',component:ForumComponent},
    {path:'forum',component:ForumComponent},
    {path:'detailsetudiant/:_id',component:DetailsetudiantComponent},
    {path:'fairereclamation',component:FairereclamationComponent},
    {path:'touslesreclamations',component:TouslesreclamationsComponent},
    {path:'planning',component:PlanningComponent},
    {path:'touslesnotes',component:TouslesnotesComponent},
    {path:'touslesabsences',component:TouslesabsencesComponent},
    {path:'touslescours',component:TouslescoursComponent},
    
  ] },
  {path:'Enseignantdashboard',component:EnseignantdashboardComponent , children : [
    {path:'',component:ForumComponent},
    {path:'forum',component:ForumComponent},  
    {path:'detailsenseignant/:_id',component:DetailsenseignantComponent},
    {path:'fairereclamation',component:FairereclamationComponent},
    {path:'touslesreclamations',component:TouslesreclamationsComponent},
    {path:'planning',component:PlanningComponent},
    {path:'deposercours',component:DeposercoursComponent},
    {path:'faireappel',component:FaireappelComponent},
  ] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
