import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-touslesreclamations',
  templateUrl: './touslesreclamations.component.html',
  styleUrls: ['./touslesreclamations.component.css']
})
export class TouslesreclamationsComponent implements OnInit {
  respone: any;
  Reclamationsall: any;
  detailsrec: any;
  filteredReclamations: any[];
  searchTerm: string;

  constructor(private Reclamation: ReclamationService, private Etudiant: EtudiantService) { }

  ngOnInit() {
    this.Reclamation.getall().subscribe(
      res => {
        this.respone = res;
        this.Reclamationsall = this.respone;
        this.filteredReclamations = this.Reclamationsall; // Initialize filteredReclamations with all reclamations

        // Fetching names of students for each reclamation
        this.Reclamationsall.forEach(reclamation => {
          this.Etudiant.getbyid(reclamation.idUser).subscribe(
            etudiantRes => {
              const etudiant = etudiantRes as any; // Assuming the response already contains the required fields
              reclamation.nomEtudiant = etudiant.nom;
              reclamation.prenomEtudiant = etudiant.prenom; // Assigning the student name to a new property in the reclamation object
            },
            err => {
              console.error(err);
            }
          );
        });

        console.log(this.Reclamationsall);
      },
      err => {
        console.error(err);
      }
    );
  }

  // Method to filter the reclamations based on their etat property
  filterReclamations(etat: string) {
    if (etat === 'ALL') {
      this.filteredReclamations = this.Reclamationsall;
    } else {
      this.filteredReclamations = this.Reclamationsall.filter(reclamation => reclamation.etat === etat);
    }
  }

  // Method to filter the reclamations based on the searchTerm (nomEtudiant)
  filterReclamationsByEtudiant() {
    if (this.searchTerm) {
      this.filteredReclamations = this.Reclamationsall.filter(
        reclamation => reclamation.nomEtudiant.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredReclamations = this.Reclamationsall;
    }
  }

  details(id: string) {
    this.Reclamation.getbyid(id).subscribe(
      res => {
        this.respone = res;
        this.detailsrec = this.respone;
        this.Etudiant.getbyid(this.detailsrec.idUser).subscribe(
          etudiantRes => {
            const etudiant = etudiantRes as any; // Assuming the response already contains the required fields
            Swal.fire({
              title: 'Détails de la réclamation',
              html: `
                <div>
                  <strong>Description:</strong> ${this.detailsrec.Description}<br>
                  <strong>État:</strong> ${this.detailsrec.etat}<br>
                  <strong>Avis:</strong> ${this.detailsrec.avis}<br>
                  <strong>Date:</strong> ${this.detailsrec.date}<br>
                  <strong>Nom de l'étudiant:</strong> ${etudiant.nom} ${etudiant.prenom}<br>
                </div>
              `,
              imageUrl: 'http://127.0.0.1:3000/getimage/' + this.detailsrec.Image,
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Image personnalisée',
            });
          },
          err => {
            console.error(err);
          }
        );
      },
      err => {
        console.error(err);
      }
    );
  }

  async traiter(id: string) {
    const { value: text } = await Swal.fire({
      html: `
        <div>
          <textarea id="avisTextarea" class="swal2-textarea" placeholder="Saisissez votre avis ici..."></textarea>
          <br>
          <label for="validéRadio"><input type="radio" id="validéRadio" name="etat" value="Validé"> Validé</label>
          <label for="nonValidéRadio"><input type="radio" id="nonValidéRadio" name="etat" value="Non validé"> Non validé</label>
        </div>
      `,
      inputAttributes: {
        'aria-label': 'Saisissez votre avis ici'
      },
      showCancelButton: true,
      preConfirm: () => {
        const avisTextarea = document.getElementById('avisTextarea') as HTMLTextAreaElement;
        const selectedAvis = document.querySelector('input[name="etat"]:checked') as HTMLInputElement;
        const text = avisTextarea.value.trim();
        const avis = selectedAvis ? selectedAvis.value : '';

        return { avis, etat: text };
      }
    });
    let obj = {
      etat: text.avis,
      avis: text.etat
    };
    console.log(obj);

    if (text) {
      Swal.fire({
        title: 'Reclamation traitée',
      });
      window.location.reload();
      this.Reclamation.update(id, obj).subscribe((data) => { console.log("here is the reclamation", data) });
    }
    this.ngOnInit();
  }
}
