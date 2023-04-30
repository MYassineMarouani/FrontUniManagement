import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-loginetudiant',
  templateUrl: './loginetudiant.component.html',
  styleUrls: ['./loginetudiant.component.css']
})
export class LoginetudiantComponent implements OnInit {
  userdata: any;
  constructor(private router: Router, private Etudiant: EtudiantService) { }
  xdata = {
    username: '',
    password: ''
  }

  ngOnInit() {
  }
  token: any;
  login() {
    this.Etudiant.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        this.router.navigate(['/Etudiantdashboard']);
        let token = localStorage.getItem('token');
        let decodedToken = JSON.parse(window.atob(token.split('.')[1]));
        console.log(decodedToken); // inspect the decoded token in the console
        localStorage.setItem('id', decodedToken.etudiantId);

      },
      err => {
        alert(err.error);

      }

    );
  }
}
