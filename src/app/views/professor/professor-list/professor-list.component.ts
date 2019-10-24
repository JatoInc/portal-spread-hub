import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SpreadHubService } from '../../../services/spread-hub-api.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {
  dataSource: any = [];
  professor: any = [];

  displayedColumns: string[] = ['name', 'document', 'telephone', 'email', 'options'];

  constructor(private router: Router, private spreadHubService: SpreadHubService) {
    this.professor = [
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
          "access_level": 1,
          "deleted": false,
          "_id": "5db0fba49bb70ca46881447a",
          "name": "Christian Moura",
          "email": "christianmsbrito@gmail3.com",
          "password": "$2b$10$Sgljt14fXzF0Lr.jJZXdVeD6pme.hnTqIE/zOx.zIfjVaIDtG9Ih.",
          "phone": "13 981553840",
          "createdAt": "2019-10-24T01:17:24.098Z",
          "updatedAt": "2019-10-24T01:17:24.098Z"
        },
        "document": "1294545963",
        "course": null,
        "createdAt": "2019-10-24T01:17:24.332Z",
        "updatedAt": "2019-10-24T01:17:24.332Z"
      }
    ]

    this.dataSource = new MatTableDataSource(this.professor);
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
    this.dataSource = new MatTableDataSource(this.professor);
    console.log('this.professor :', this.professor);
  }

  enterDetails(id) {
    console.log('id :', id);
    this.router.navigate(['/professors', id]);
  }
}
