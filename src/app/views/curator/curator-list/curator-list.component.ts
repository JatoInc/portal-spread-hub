import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-curator-list',
  templateUrl: './curator-list.component.html',
  styleUrls: ['./curator-list.component.scss']
})
export class CuratorListComponent implements OnInit {
  dataSource: any = [];
  curators: any = [];

  displayedColumns: string[] = ['name', 'document', 'telephone', 'email', 'options'];

  constructor(private router: Router) {
    this.curators = [
      {
        "id": 1,
        "name": "Carlos Malaquias",
        "document": "1234567890",
        "telephone": "(13)28192-2321",
        "email": "carlos@fatecpg.br",
      },
      {
        "id": 2,
        "name": "Rafael Pontes",
        "document": "1092831728",
        "telephone": "(13)98821-3920",
        "email": "rafaelp@fatecpg.br",
      },
      {
        "id": 3,
        "name": "Juliano Martinelly",
        "document": "4261872618",
        "telephone": "(11)98928-3920",
        "email": "julianom@fatecpg.br",
      },
      {
        "id": 4,
        "name": "Pedro Galvão",
        "document": "9823019283",
        "telephone": "(13)3472-6029",
        "email": "pedrog@fatecpg.br",
      },
    ]
    this.dataSource = new MatTableDataSource(this.curators);
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  enterDetails(id) {
    console.log('id :', id);
    this.router.navigate(['/curators', id]);
  }

}
