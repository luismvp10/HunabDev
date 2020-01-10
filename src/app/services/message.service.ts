import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  sendMessage(body) {
    return this.http.post('https://us-central1-hunab-36a6f.cloudfunctions.net/app/email', body);
  }
}
