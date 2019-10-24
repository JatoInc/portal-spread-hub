import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  id: any;
  student: any;
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

  backupInfo: any;
  isCurator: Boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private spreadHubService: SpreadHubService) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id']
    await this.getStudent();
  }

  async getStudent() {
    this.student = await this.spreadHubService.getStudentById(this.id);
    console.log('this.student :', this.student);

    this.name = this.student.user.name
    this.register = this.student.register
    this.email = this.student.user.email
    this.phone = this.student.user.phone
    this.street = this.student.user.address.street
    this.number = this.student.user.address.number
    this.complement = this.student.user.address.complement
    this.city = this.student.user.address.city
    this.state = this.student.user.address.state
    this.uf = this.student.user.address.uf

    this.isCurator = this.student.user.access_level === 2 ? true : false;
  }

  async updateStudent() {
    try {
      this.backupInfo = Object.assign({}, this.student);

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

      console.log('this.backupInfo :', this.backupInfo);
      return

      await this.spreadHubService.updateStudent(this.id, this.backupInfo);

      if (this.isCurator) {
        await this.spreadHubService.createCurator(this.id);

      }

      this.router.navigate(['/students']);

    } catch (err) {

      throw err;
    }
  }

}
