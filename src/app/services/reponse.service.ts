import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(Reponsenew) {
    return this.http.post(this.endpoint.url + 'Reponse/add',Reponsenew)
  }
  getresponsesbyidquestion (id) {
    return this.http.get(this.endpoint.url+'Reponse/getbyid/'+id);

  }
  getall(){
    return this.http.get(this.endpoint.url + 'Reponse/getall');
  }
}
