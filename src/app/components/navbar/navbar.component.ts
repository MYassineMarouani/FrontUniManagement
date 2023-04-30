import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private Etudiant: EtudiantService, private Admin: AdminserviceService, private Enseignant: EnseignantService) { }

  ngOnInit() {
    
  }

}
