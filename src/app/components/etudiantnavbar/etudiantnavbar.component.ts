import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiantnavbar',
  templateUrl: './etudiantnavbar.component.html',
  styleUrls: ['./etudiantnavbar.component.css']
})
export class EtudiantnavbarComponent implements OnInit {
  id: any;
  respone: any;
  Etudiantdetails: any;

  constructor(private Etudiant: EtudiantService,private endpoint:EndpointService) { }

  ngOnInit() {
    let id = localStorage.getItem("id");
    console.log(id);
    this.Etudiant.getbyid(id).subscribe(
      res => {
        this.respone = res;
        if (this.respone) {
          this.Etudiantdetails = this.respone;
          console.log(this.respone);
        }
      }
    );
    
  }
}


