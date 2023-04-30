import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-loginenseignant',
  templateUrl: './loginenseignant.component.html',
  styleUrls: ['./loginenseignant.component.css']
})
export class LoginenseignantComponent implements OnInit {
  userdata: any;
  constructor(private router: Router, private Enseignant:EnseignantService) { }
  xdata = {
    username: '',
    password: ''
  }

  ngOnInit() {
  }
  token: any;
  login() {
    this.Enseignant.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        this.router.navigate(['/Enseignantdashboard']);
        let token = localStorage.getItem('token');
        let decodedToken = JSON.parse(window.atob(token.split('.')[1]));
        console.log(decodedToken); // inspect the decoded token in the console
        localStorage.setItem('id', decodedToken.enseignantId);

      },
      err => {
        alert(err.error);

      }

    );
  }
}
