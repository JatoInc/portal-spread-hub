import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.scss']
})
export class ProfessorDetailsComponent implements OnInit {
  id;
  professor: any;
  name: any;
  register: any;
  email: any;
  phone: any;
  street: any;
  number: any;
  complement: any;
  city: any;
  state: any;
  uf: any;

  constructor(private route: ActivatedRoute, private router: Router, private spreadHubService: SpreadHubService) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id']
    await this.getProfessor();
  }

  async getProfessor() {
    this.professor = await this.spreadHubService.getProfessorById(this.id);
    console.log('this.professor :', this.professor);

    this.name = this.professor.user.name
    this.register = this.professor.register
    this.email = this.professor.user.email
    this.phone = this.professor.user.phone
    this.street = this.professor.user.address.street
    this.number = this.professor.user.address.number
    this.complement = this.professor.user.address.complement
    this.city = this.professor.user.address.city
    this.state = this.professor.user.address.state
    this.uf = this.professor.user.address.uf
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
