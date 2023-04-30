import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http: HttpClient,private endpoint: EndpointService) { }
  login(enseignant:any) {
    return this.http.post(this.endpoint.url + 'Enseignant/login',enseignant)
  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Enseignant/getbyid/'+ id);
  }
  loggedin() {
    return !!localStorage.getItem('token')
  }
  getEnseignantData() {
    let token = localStorage.getItem('token');
    let decodedToken = JSON.parse(window.atob(token.split('.')[1]));
    localStorage.setItem('id', decodedToken.userId);
    return decodedToken.subject;
  }
}
