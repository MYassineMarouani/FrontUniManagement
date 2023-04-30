import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-enseignantnavbar',
  templateUrl: './enseignantnavbar.component.html',
  styleUrls: ['./enseignantnavbar.component.css']
})
export class EnseignantnavbarComponent implements OnInit {
  id: any;
  respone: any;
  Enseignantdetails: any;
  constructor(private Enseignant:EnseignantService,private endpoint:EndpointService) { }

  ngOnInit() {
    let id = localStorage.getItem("id");
    console.log(id);
    this.Enseignant.getbyid(id).subscribe(
      res => {
        this.respone = res;
        if (this.respone) {
          this.Enseignantdetails = this.respone;
          console.log(this.respone);
        }
      }
    );

  }

}
