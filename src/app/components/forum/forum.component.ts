import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

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
  constructor(private Reponse: ReponseService, private Question: QuestionService, private Etudiant: EtudiantService, private Enseignant: EnseignantService, private endpoint: EndpointService) { }
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
                    console.log("Enseignant: " + question.user.nom);
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
              // working only for studnet replies
              // const promises = responsesArray.map(async (response) => {
              //   let user;
              //   this.Etudiant.getusertype(question.idUser).subscribe(
              //     async res => {
              //       this.respone123 = res;
              //       if (this.respone123.type == 1) {
              //         user = await this.Etudiant.getbyid(response.idUser).toPromise();
              //       } else if (this.respone123.type == 2) {
              //         user = await this.Enseignant.getbyid(response.idUser).toPromise();
              //       }
              //       response.user = user;
              //       console.log(response.user.nom);
              //     }
              //   );
              // });
              
              const promises = responsesArray.map(async (response) => {
                let user;
                let proffesion="Etudiant";
                user = await this.Etudiant.getbyid(response.idUser).toPromise();
                
                if (!user) {
                  user = await this.Enseignant.getbyid(response.idUser).toPromise();
                  proffesion = "Enseignant";
                }
              
                response.user = user;
                response.proffesion = proffesion;
                console.log("esmou"+response.user.nom+"w howa"+proffesion);
                
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
        alert("registered succesully");
      },
      err => {
        this.err = err;
      })
  }
}

