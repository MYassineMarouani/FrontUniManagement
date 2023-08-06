import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(Reclamationnew) {
    return this.http.post(this.endpoint.url + 'Reclamation/add',Reclamationnew)
  }
  getReclamationsbyidUser (id) {
    return this.http.get(this.endpoint.url+'Reclamation/getbyid/'+id);

  }
  getbyid (id) {
    return this.http.get(this.endpoint.url+'Reclamation/getbyiddet/'+id);

  }
  getall(){
    return this.http.get(this.endpoint.url + 'Reclamation/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Reclamation/delete/'+id);

  }
  update(id: any, Reclamationnew: any){

    return this.http.put(this.endpoint.url + 'Reclamation/update/' + id , Reclamationnew);

  }
}
