import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpreadHubService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://40.117.99.226:4000/api/v1';
  }

  async helloWorld() {
    return this.http.get(`${this.url}/hello-world`)
    .toPromise()
    .catch((err: HttpErrorResponse) => Promise.reject(err));
  }
}
