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
  backupInfo;
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
  selectedSubject: any;

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

    this.selectedSubject = this.professor.selectedSubject
  }

  async updateProfessor() {
    try {
      this.backupInfo = Object.assign({}, this.professor);

      this.backupInfo.user.name = this.name
      this.backupInfo.register = this.register
      this.backupInfo.user.email = this.email
      this.backupInfo.user.phone = this.phone
      this.backupInfo.user.address.street = this.street
      this.backupInfo.user.address.number = this.number
      this.backupInfo.user.address.complement = this.complement
      this.backupInfo.user.address.city = this.city
      this.backupInfo.user.address.state = this.state
      this.backupInfo.user.address.uf = this.uf

      delete this.backupInfo._id;

      // let treatedBody = {
      //   name: this.backupInfo.user.name,
      //   register: this.backupInfo.register,
      //   email: this.backupInfo.user.email,
      //   phone: this.backupInfo.user.phone,
      //   street: this.backupInfo.user.address.street,
      //   number: this.backupInfo.user.address.number,
      //   complement: this.backupInfo.user.address.complement,
      //   city: this.backupInfo.user.address.city,
      //   state: this.backupInfo.user.address.state,
      //   uf: this.backupInfo.user.address.uf,
      // }

      await this.spreadHubService.updateProfessor(this.id, this.backupInfo);

      this.router.navigate(['/professors']);

    } catch (err) {

      throw err;
    }
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
