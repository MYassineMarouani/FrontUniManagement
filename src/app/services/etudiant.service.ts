import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient,private endpoint: EndpointService) { }
  login(etudiant:any) {
    return this.http.post(this.endpoint.url + 'Etudiant/login',etudiant)
  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Etudiant/getbyid/'+ id);
  }
  loggedin() {
    return !!localStorage.getItem('token')
  }
  getEtudiantData() {
    let token = localStorage.getItem('token');
    let decodedToken = JSON.parse(window.atob(token.split('.')[1]));
    localStorage.setItem('id', decodedToken.userId);
    return decodedToken.subject;
  }
  getusertype(id: any){
    return this.http.get(this.endpoint.url + 'Etudiant/getbyiduser/'+ id);
  }
  
 
}
