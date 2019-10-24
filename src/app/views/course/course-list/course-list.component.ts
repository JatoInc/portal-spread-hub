import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SpreadHubService } from '../../../services/spread-hub-api.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  dataSource: any = [];
  courses: any = [];

  displayedColumns: string[] = ['name', 'studentsSigned', 'options'];

  constructor(private router: Router, private spreadHubService: SpreadHubService) {
    this.courses = [
      {
        "id": 1,
        "name": "Análise e Desenvolvimento de Sistemas",
        "studentsSigned": "982"
      },
      {
        "id": 2,
        "name": "Processos Químicos",
        "studentsSigned": "532"
      },
      {
        "id": 3,
        "name": "Gestão Empresarial",
        "studentsSigned": "321",
      },
    ]
    this.dataSource = new MatTableDataSource(this.courses);
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    this.dataSource.paginator = this.paginator;
    await this.get();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async get() {
    this.courses = await this.spreadHubService.getProfessors();
    console.log('this.courses :', this.courses);
  }

  enterDetails(id) {
    console.log('id :', id);
    this.router.navigate(['/courses', id]);
  }

}
