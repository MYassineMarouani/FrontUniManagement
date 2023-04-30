import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(Questionnew) {
    return this.http.post(this.endpoint.url + 'Question/add',Questionnew)
  }
  getQuestionsbyidUser (id) {
    return this.http.get(this.endpoint.url+'Question/getbyid/'+id);

  }
  getall(){
    return this.http.get(this.endpoint.url + 'Question/getall');
  }
}
