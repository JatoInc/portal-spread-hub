import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {
  dataSource: any = [];
  professors: any = [];

  displayedColumns: string[] = ['name', 'document', 'subjects', 'email', 'options'];

  constructor(private router: Router, private spreadHubService: SpreadHubService) {
    
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
    this.professors = await this.spreadHubService.getProfessors();
    this.dataSource = new MatTableDataSource(this.professors);

    this.dataSource.filterPredicate = (data, filter) => {
      console.log('object :', filter);
      return (data.user.name.indexOf(filter) !== -1) || 
      (data.user.email.indexOf(filter) !== -1) || 
      (data.register.indexOf(filter) !== -1)
    }

    console.log('this.professors :', this.professors);
  }

  enterDetails(id) {
    console.log('id :', id);
    this.router.navigate(['/professors', id]);
  }

  async deleteProfessor(id) {
    try {
      let index = this.professors.findIndex(pro => pro._id == id);
      this.professors.splice(index, 1)
      this.dataSource = new MatTableDataSource(this.professors);
      await this.spreadHubService.deleteProfessor(id);
    } catch (err) {
      console.log(err)
    }
  }
}
