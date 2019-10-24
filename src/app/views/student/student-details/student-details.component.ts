import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';
import { Router } from '@angular/router';



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

  constructor(private route: ActivatedRoute, private router: Router, private spreadHubService: SpreadHubService) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id']
    await this.getStudent();
  }

  async getStudent() {
    this.student = await this.spreadHubService.getStudentById(this.id);

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

      await this.spreadHubService.updateStudent(this.id, this.backupInfo);

      this.router.navigate(['/students']);

    } catch (err) {

      throw err;
    }
  }

}
