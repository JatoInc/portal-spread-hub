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

  displayedColumns: string[] = ['user', 'register', 'telephone', 'email', 'options'];

  constructor(private router: Router, private spreadHubService: SpreadHubService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    await this.get();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  async get() {
    try {
      this.students = await this.spreadHubService.getStudents();
      this.dataSource = new MatTableDataSource(this.students);

      this.dataSource.filterPredicate = (data, filter) => {
        return (data.user.name.indexOf(filter) !== -1) || 
        (data.user.email.indexOf(filter) !== -1) || 
        (data.user.phone.indexOf(filter) !== -1) ||
        (data.register.indexOf(filter) !== -1)
      }

    } catch (err) {
      console.log(err);
    }
  }

  enterDetails(id) {
    this.router.navigate(['/students', id]);
  }

  async deleteStudent(id) {
    try {
      let index = this.students.findIndex(stu => stu._id == id);
      this.students.splice(index, 1)
      this.dataSource = new MatTableDataSource(this.students);
      await this.spreadHubService.deleteStudent(id);
    } catch (err) {
      console.log(err)
    }
  }


}
