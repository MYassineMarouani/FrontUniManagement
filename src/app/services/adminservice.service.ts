import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient,private endpoint: EndpointService) { }
  login(admin:any) {
    return this.http.post(this.endpoint.url + 'Admin/login',admin)
  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Admin/getbyid/'+ id);
  }
  loggedin() {
    return !!localStorage.getItem('token')
  }
  getAdminData() {
    let token = localStorage.getItem('token');
    let decodedToken = JSON.parse(window.atob(token.split('.')[1]));
    localStorage.setItem('id', decodedToken.userId);
    return decodedToken.subject;
  }
  
 
}
