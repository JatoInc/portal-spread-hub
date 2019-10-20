import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpreadHubService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4000/api/v1';
  }

  async helloWorld() {
    // const result = await this.http.get(`${this.url}/hello-world`)
    return this.http.get(`${this.url}/hello-world`)
    .toPromise()
    .catch((err: HttpErrorResponse) => Promise.reject(err));
  }
}
