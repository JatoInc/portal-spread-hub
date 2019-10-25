import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-curator-list',
  templateUrl: './curator-list.component.html',
  styleUrls: ['./curator-list.component.scss']
})
export class CuratorListComponent implements OnInit {
  dataSource: any = [];
  listAllStudents: any = [];
  curators: any = [];

  displayedColumns: string[] = ['name', 'register', 'telephone', 'email', 'options'];

  constructor(private router: Router, private spreadHubService: SpreadHubService) { }


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    await this.get();
    this.dataSource.paginator = this.paginator;
  }

  async get() {
    try {
      this.curators = await this.spreadHubService.getCurators();
      this.dataSource = new MatTableDataSource(this.curators);

      this.dataSource.filterPredicate = (data, filter) => {
        return (data.user.name.indexOf(filter) !== -1) ||
          (data.user.email.indexOf(filter) !== -1) ||
          (data.user.phone.indexOf(filter) !== -1) ||
          (data.register.indexOf(filter) !== -1)
      }
      console.log('this.curators :', this.curators);

    } catch (err) {
      throw err;
    }
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  enterDetails(id) {
    this.router.navigate(['/curators', id]);
  }

  async deleteCurator(id) {
    try {
      console.log('oia', id);

      let index = this.curators.findIndex(cur => cur._id == id);
      this.curators.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.curators);
      await this.spreadHubService.deleteCurator(id);
    } catch (err) {
      throw err
    }
  }


}
