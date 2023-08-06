import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fairereclamation',
  templateUrl: './fairereclamation.component.html',
  styleUrls: ['./fairereclamation.component.css']
})
export class FairereclamationComponent implements OnInit {
  selectedFile: File;
  err: any;
  postContent: string;
  constructor(private Reclamation: ReclamationService,) { }

  ngOnInit() {
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onSubmit() {
    // Create a FormData object and append the post content and selected file to it
    const formData = new FormData();
    console.log(this.postContent)
    formData.append('Description', this.postContent);
    formData.append('image', this.selectedFile);
    formData.append('idUser', localStorage.getItem('id'));

    // Call the service method to submit the form data
    this.Reclamation.add(formData).subscribe(
      (data) => {
        console.log("Reclamation succesfully", data);
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
          title: 'Reclamation envoyée !'
        })
      },
      err => {
        this.err = err;
      })
    this.ngOnInit();
  }

}
