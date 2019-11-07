import { Component, OnInit } from '@angular/core';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
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

  constructor(private spreadHubService: SpreadHubService, private router: Router) { }

  ngOnInit() {
  }

  async createStudent() {
    try {
      let body = {
        "register": this.register,
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

      await this.spreadHubService.createStudent(body);

      this.router.navigate(['/students']);
      
    } catch (err) {
      console.log(err);
    }
  }
}
