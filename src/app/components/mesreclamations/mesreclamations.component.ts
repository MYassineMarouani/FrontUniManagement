import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mesreclamations',
  templateUrl: './mesreclamations.component.html',
  styleUrls: ['./mesreclamations.component.css']
})
export class MesreclamationsComponent implements OnInit {
  private _id: string;
  Reclamationsall: any;
  respone: any;
  detailsrec: any;
  constructor(private Reclamation: ReclamationService) { }

  ngOnInit() {
    this._id = localStorage.getItem("id");
    this.Reclamation.getReclamationsbyidUser(this._id).subscribe(
      res => {
        this.respone = res
        this.Reclamationsall = this.respone;
        console.log(this.Reclamationsall)
      }
    );
  }
  details(id: string) {
    this.Reclamation.getbyid(id).subscribe(
      res => {
        this.respone = res;
        this.detailsrec = this.respone;
        Swal.fire({
          title: 'Détails de la réclamation',
          html: `
            <div>
              <strong>Description:</strong> ${this.detailsrec.Description}<br>
              <strong>État:</strong> ${this.detailsrec.etat}<br>
              <strong>Avis:</strong> ${this.detailsrec.avis}<br>
              <strong>Date:</strong> ${this.detailsrec.date}<br>
            </div>
          `,
          imageUrl: 'http://127.0.0.1:3000/getimage/' + this.detailsrec.Image,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Image personnalisée',
        });
      }
    );
  }
  supprimer(id: string) {
    Swal.fire({
      title: 'Supprimer la réclamation',
      text: 'Voulez-vous vraiment supprimer cette réclamation ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.Reclamation.delete(id).subscribe(() => {
          Swal.fire({
            title: 'Réclamation supprimée',
            text: 'La réclamation a été supprimée avec succès.',
            icon: 'success',
          }).then(() => {
            window.location.reload();
          });
        });
      }
    });
  }
  
  
  
}

