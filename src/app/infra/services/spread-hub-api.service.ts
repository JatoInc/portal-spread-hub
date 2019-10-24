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

  async getStudentById(id) {
    return this.http.get(`${this.url}/students/${id}?_full=true`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async updateStudent(id, body) {
    return this.http.put(`${this.url}/students/${id}`, body)
    .toPromise()
    .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async deleteStudent(id) {
    return this.http.delete(`${this.url}/students/${id}`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async createStudent(body) {
    return this.http.post(`${this.url}/students`, body)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }




  async getCourses() {
    return this.http.get(`${this.url}/courses`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async getCourseById(id) {
    return this.http.get(`${this.url}/courses/${id}`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async updateCourse(id, body) {
    return this.http.put(`${this.url}/courses/${id}`, body)
    .toPromise()
    .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async deleteCourse(id) {
    return this.http.delete(`${this.url}/courses/${id}`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async createCourse(body) {
    return this.http.post(`${this.url}/courses`, body)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }



  async getProfessors() {
    return this.http.get(`${this.url}/students?_full=true`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async getProfessorById(id) {
    return this.http.get(`${this.url}/students/${id}?_full=true`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async updateProfessor(id, body) {
    return this.http.put(`${this.url}/professors/${id}`, body)
    .toPromise()
    .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async deleteProfessor(id) {
    return this.http.delete(`${this.url}/students/${id}`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async createProfessor(body) {
    return this.http.post(`${this.url}/students`, body)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }
}
