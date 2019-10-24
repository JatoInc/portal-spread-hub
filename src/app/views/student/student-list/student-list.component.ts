import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  dataSource: any = [];
  students: any = [];

  // displayedColumns: string[] = ['name', 'document', 'telephone', 'email', 'options'];
  displayedColumns: string[] = ['name', 'register', 'telephone', 'email', 'options'];

  constructor(private router: Router, private spreadHubService: SpreadHubService) {
    this.students = [
      {
        "responsible": [],
        "deleted": false,
        "_id": "5db0fba49bb70ca46881447c",
        "user": {
          "address": {
            "street": "Rua Teófila Vanderlinde",
            "number": "174",
            "complement": "ap 708",
            "city": "Praia Grande",
            "state": "São Paulo",
            "uf": "SP"
          },
          "access_level": 3,
          "deleted": false,
          "_id": "5db0fba49bb70ca46881447a",
          "name": "Christian Moura",
          "email": "christianmsbrito@gmail3.com",
          "password": "$2b$10$Sgljt14fXzF0Lr.jJZXdVeD6pme.hnTqIE/zOx.zIfjVaIDtG9Ih.",
          "phone": "13 981553840",
          "createdAt": "2019-10-24T01:17:24.098Z",
          "updatedAt": "2019-10-24T01:17:24.098Z"
        },
        "register": "1294545963",
        "course": null,
        "createdAt": "2019-10-24T01:17:24.332Z",
        "updatedAt": "2019-10-24T01:17:24.332Z"
      }
    ]
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    await this.get();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async get() {
    // this.students = await this.spreadHubService.getStudents();
    this.dataSource = new MatTableDataSource(this.students);

    console.log('this.students :', this.students);
  }

  enterDetails(id) {
    console.log('id :', id);
    this.router.navigate(['/students', id]);
  }

}
