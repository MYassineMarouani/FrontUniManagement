import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  respone: any;
  Admindetails: any;


  constructor(private Admin: AdminserviceService,private router:Router) { }

  ngOnInit() {
    let id = localStorage.getItem("id");
    console.log(id);
    this.Admin.getbyid(id).subscribe(
      res => {
        this.respone = res;
        if (this.respone) {
          this.Admindetails = this.respone.Image;
          console.log("admin"+this.Admindetails);
        }
      }
    );
    
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/LoginEtudiant']);
  }

}
