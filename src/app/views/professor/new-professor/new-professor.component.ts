import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-new-professor',
  templateUrl: './new-professor.component.html',
  styleUrls: ['./new-professor.component.scss']
})
export class NewProfessorComponent implements OnInit {
  subjects: any;
  selectedSubject: any;

  register: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  uf: string;

  listOfSubjects: string[] = ['Matematica Discreta',
    'Cálculo',
    'Laboratório de Banco de Dados',
    'Laboratório de Engenharia de Software',
    'Programação Linear'];

  constructor(private spreadHubService: SpreadHubService, private router: Router) { }

  async ngOnInit() {
    await this.getSubjects();
  }

  async getSubjects() {
    this.subjects = await this.spreadHubService.getSubjects();
    console.log('this.subjects :', this.subjects);
  }

  async createProfessor() {
    try {
      let body = {
        "register": this.register,
        "subject": this.selectedSubject,
        "user": {
          "password": "teste@123",
          "email": this.email,
          "name": this.name,
          "phone": this.phone,
          "address": {
            "street": this.street,
            "number": this.number,
            "complement": this.complement,
            "city": this.city,
            "state": this.state,
            "uf": this.uf
          }
        }
      }

      await this.spreadHubService.createProfessor(body);
      this.router.navigate(['/professors']);

    } catch (err) {
      console.log(err);
    }
  }
}
