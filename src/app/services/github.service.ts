import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private url: string = 'https://api.github.com/users/';
  private username: string = '';
  private client_id: string = 'a88f17ab7617677103a7';
  private client_secret: string = '4b6a149fb7f92beb62a24096693897106803733d';

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get(`${this.url}${this.username}`);
  }

  getRepos(): Observable<any> {
    return this.http.get(
      this.url +
        this.username +
        '/repos?client_id=' +
        this.client_id +
        '&client_secret=' +
        this.client_secret
    );
  }

  updateUsername(username: string) {
    this.username = username;
  }
}
