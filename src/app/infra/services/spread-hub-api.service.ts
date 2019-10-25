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
    return this.http.get(`${this.url}/professors?_full=true`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async getProfessorById(id) {
    return this.http.get(`${this.url}/professors/${id}?_full=true`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async updateProfessor(id, body) {
    return this.http.put(`${this.url}/professors/${id}`, body)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async deleteProfessor(id) {
    return this.http.delete(`${this.url}/professors/${id}`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async createProfessor(body) {
    return this.http.post(`${this.url}/professors`, body)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }



  async getCurators() {
    return this.http.get(`${this.url}/curators`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async getCuratorById(id) {
    return this.http.get(`${this.url}/curators/${id}?_full=true`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async updateCurator(id, body) {
    return this.http.put(`${this.url}/curators/${id}`, body)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async deleteCurator(id) {
    return this.http.delete(`${this.url}/curators/${id}`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async createCurator(id) {
    return this.http.post(`${this.url}/curators/${id}`, {})
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }



  async getSubjects() {
    return this.http.get(`${this.url}/subjects`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async getSubjectById(id) {
    return this.http.get(`${this.url}/subjects/${id}`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async updateSubject(id, body) {
    return this.http.put(`${this.url}/subjects/${id}`, body)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async deleteSubject(id) {
    return this.http.delete(`${this.url}/subjects/${id}`)
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }

  async createSubject(id) {
    return this.http.post(`${this.url}/subjects/${id}`, {})
      .toPromise()
      .catch((err: HttpErrorResponse) => Promise.reject(err));
  }
}
