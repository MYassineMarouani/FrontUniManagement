import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  userdata: any;
  constructor(private router: Router, private Admin: AdminserviceService) { }
  xdata = {
    username: '',
    password: ''
  }

  ngOnInit() {
  }
  token: any;
  login() {
    this.Admin.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        
        let token = localStorage.getItem('token');
        let decodedToken = JSON.parse(window.atob(token.split('.')[1]));
        console.log(decodedToken); // inspect the decoded token in the console
        localStorage.setItem('id', decodedToken.adminId);
        this.router.navigate(['/admindashboard']);
      },
      err => {
        alert(err.error);

      }

    );
  }
}
