import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
import { AdminserviceService } from 'src/app/services/adminservice.service';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  public length: number;
  id: any;
  respone: any;
  Userdetails: any;
  Userdetails1: any;
  postContent: string;
  selectedFile: File;
  err: any;
  respone12: any;
  Reponsesdetails: any;
  respone123: any;
  postResponse: string;
  Questionsofuser: Object;
  totalResponses: any;
  questions12: any;
  totalResponsesByUser: number;
  constructor(private Admin:AdminserviceService,private Reponse: ReponseService, private Question: QuestionService, private Etudiant: EtudiantService, private Enseignant: EnseignantService, private endpoint: EndpointService) { }
  Questions: any;
  ngOnInit() {
    let id = localStorage.getItem("id");
    console.log(id);
    this.Etudiant.getusertype(id).subscribe(
      res => {
        this.respone = res;
        if (this.respone.type == 1) {
          this.Etudiant.getbyid(id).subscribe(
            res => {
              this.respone = res;
              if (this.respone) {
                this.Userdetails = this.respone;
              }
            }
          );
        } else if (this.respone.type == 2) {
          this.Enseignant.getbyid(id).subscribe(
            res => {
              this.respone = res;
              if (this.respone) {
                this.Userdetails = this.respone;
              }
            }
          );
        } else if (id == '645000c3e1cb7926db2d4778'){
          this.Admin.getbyid(id).subscribe(
            res => {
              this.respone = res;
              if (this.respone) {
                this.Userdetails = this.respone;

              }
            }
          );

        }
      }
    );
    this.Question.getall().subscribe(
      res => {
        this.Questions = res;

        // Loop through each question and get the user information
        this.Questions.forEach(question => {
          this.Etudiant.getusertype(question.idUser).subscribe(
            async res => {
              this.respone12 = res;
              if (this.respone12.type == 1) {
                this.Etudiant.getbyid(question.idUser).subscribe(
                  res => {
                    this.Userdetails1 = res;
                    // Add the user information to the question object
                    question.user = this.Userdetails1;
                    question.modify = localStorage.getItem('id');
                    console.log("Etudiant: " + question.user.nom);
                  },
                  err => {
                    console.log(err);
                  }
                );
              } else if (this.respone12.type == 2) {
                this.Enseignant.getbyid(question.idUser).subscribe(
                  res => {
                    this.Userdetails1 = res;
                    // Add the user information to the question object
                    question.user = this.Userdetails1;
                    question.modify = localStorage.getItem('id');
                    console.log("Enseignant: " + question.user.nom);
                  },
                  err => {
                    console.log(err);
                  }
                );
              } else if (this.respone12.type == 3) {
                this.Admin.getbyid(question.idUser).subscribe(
                  res => {
                    this.Userdetails1 = res;
                    // Add the user information to the question object
                    question.user = this.Userdetails1;
                    question.modify = localStorage.getItem('id');
                    console.log("admin: " + question.user.nom);
                  },
                  err => {
                    console.log(err);
                  }
                );
              }
              // Get responses for question
              const responses = await this.Reponse.getresponsesbyidquestion(question._id).toPromise();
              console.log("Reponses: ", responses);
              question.responses = responses;
              const responsesArray = Object.values(responses);

              // get role 
              const promises = responsesArray.map(async (response) => {
                let user;
                let proffesion = "Etudiant";
                user = await this.Etudiant.getbyid(response.idUser).toPromise();

                if (!user) {
                  user = await this.Enseignant.getbyid(response.idUser).toPromise();
                  proffesion = "Enseignant";
                  if (!user) {
                    user = await this.Admin.getbyid(response.idUser).toPromise();
                  proffesion = "Administrateur";
                  }
                }

                response.user = user;
                response.proffesion = proffesion;
                console.log("esmou" + response.user.nom + "w howa" + proffesion);

              });






            },
            err => {
              console.log(err);
            }
          );
          // get responses

        });
      },
      err => {
        console.log(err);
      }
    );



    // get how many questions the user has got 

    this.Question.getQuestionsbyidUser(localStorage.getItem('id')).subscribe(
      (res: any) => {
        this.Questionsofuser = res;
        this.length = Object.keys(this.Questionsofuser).length;
        console.log("andek questions : "+length)
        const observables = res.map((question) =>
          this.Reponse.getresponsesbyidquestion(question._id)
        );
        forkJoin(observables).subscribe(
          (responses: any[]) => {
            let totalResponses = responses.reduce(
              (acc, curr) => acc + curr.length,
              0
            );
            this.totalResponses = totalResponses;
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
    // get how many resposnes he got 


    this.Question.getall().subscribe(
      (res: any) => {
        this.questions12 = res;
        const observables = [];
        for (let question of res) {
          observables.push(this.Reponse.getresponsesbyidquestion(question._id));
        }
        forkJoin(observables).subscribe(
          (responses: any[]) => {
            let totalResponses1 = 0;
            for (let responseList of responses) {
              for (let response of responseList) {
                if (response.idUser === localStorage.getItem('id')) {
                  totalResponses1++;
                }
              }
            }
            console.log('total responses by user:', totalResponses1);
            this.totalResponsesByUser = totalResponses1;
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );










  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onSubmit() {
    // Create a FormData object and append the post content and selected file to it
    const formData = new FormData();

    formData.append('Description', this.postContent);
    formData.append('image', this.selectedFile);
    formData.append('idUser', localStorage.getItem('id'));

    // Call the service method to submit the form data
    this.Question.add(formData).subscribe(
      (data) => {
        console.log("Question succesfully", data);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: ' publié avec success '
        })
      },
      err => {
        this.err = err;
      })
    this.ngOnInit();
  }
  onSubmitResponse(id: string) {

    const Reponsepost = {
      Description: this.postResponse,
      idQuestion: id,
      idUser: localStorage.getItem('id')
    }
    this.Reponse.add(Reponsepost).subscribe(
      (data) => {
        console.log("Response succesfully", data);

      },
      err => {
        this.err = err;
        console.log(err)
      })
    this.ngOnInit();

  }
  async modifierquestion(idquestion: string, idUser: string,description:string) {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputValue: description,
      inputLabel: 'Modifier Question',
      inputPlaceholder: 'Nouvelle Question...',
      inputAttributes: {
        'aria-label': 'Nouvelle Question'
      },
      showCancelButton: true
    });
    let newdescription = {
      Description:text
    }

    if (text) {
      this.Question.update(idquestion, newdescription).subscribe(
        res => {
          console.log("Question updated successfully.");
          Swal.fire('Modifié!', 'La question a été modifiée.', 'success');
    
          this.ngOnInit();
        },
        err => {
          console.log("Error updating question: ", err);
          Swal.fire('Erreur', 'Impossible de modifier la question.', 'error');
        
        }
      );
    }

    


  }
  supprimerquestion(idquestion: string, idUser: string) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer cette question?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-la!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.Question.delete(idquestion).subscribe(
          res => {
            console.log("Question supprimée avec succès.");
            Swal.fire('Supprimé!', 'La question a été supprimée.', 'success');
            
          },
          err => {
            console.log("Erreur lors de la suppression de la question: ", err);
            Swal.fire('Erreur', 'Impossible de supprimer la question.', 'error');
          
          }
        );
      }
    });
    this.ngOnInit();
  }
  async modifierreponse(idreponse: string, idUser: string,description:string) {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputValue: description,
      inputLabel: 'Modifier Reponse',
      inputPlaceholder: 'Nouvelle Reponse...',
      inputAttributes: {
        'aria-label': 'Nouvelle Reponse'
      },
      showCancelButton: true
    });
    let newdescription = {
      Description:text
    }

    if (text) {
      this.Reponse.update(idreponse, newdescription).subscribe(
        res => {
          console.log("Reponse updated successfully.");
          Swal.fire('Modifié!', 'La Reponse a été modifiée.', 'success');
          
          this.ngOnInit();
        },
        err => {
          console.log("Error updating Reponse: ", err);
          Swal.fire('Erreur', 'Impossible de modifier la Reponse.', 'error');
          
        }
      );
    }

  }
  supprimerreponse(idreponse: string, idUser: string) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer cette Reponse?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-la!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes, delete it"
        this.Reponse.delete(idreponse).subscribe(
          res => {
            console.log("Reponse supprimée avec succès.");
            Swal.fire('Supprimé!', 'La Reponse a été supprimée.', 'success');
            // Code to update the UI or show a success message
          },
          err => {
            console.log("Erreur lors de la suppression de la Reponse: ", err);
            Swal.fire('Erreur', 'Impossible de supprimer la Reponse.', 'error');
            // Code to handle the error or show an error message
          }
        );
      }
    });
    this.ngOnInit();

  }
}

