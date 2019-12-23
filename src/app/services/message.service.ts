import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  sendMessage(body) {
    return this.http.post('https://us-central1-hunab-8fe9e.cloudfunctions.net/app/email', body);
  }
}
