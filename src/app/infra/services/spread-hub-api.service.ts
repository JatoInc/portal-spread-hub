import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpreadHubService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://40.87.43.5:4000/api/v1';
  }

  async getStudents() {
    return this.http.get(`${this.url}/students?_full=true`)
    .toPromise()
    .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async createStudent(body) {
    return this.http.post(`${this.url}/students`, body)
    .toPromise()
    .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

}
