import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-curator-list',
  templateUrl: './curator-list.component.html',
  styleUrls: ['./curator-list.component.scss']
})
export class CuratorListComponent implements OnInit {
  dataSource: any = [];
  test: any = []

  displayedColumns: string[] = ['name', 'document', 'telephone', 'email', 'options'];


  name: string;
  position: number;
  weight: number;
  symbol: string;

  ELEMENT_DATA: any;

  constructor() {
    this.test = [
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
        "document": "426187261827",
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
    this.dataSource = new MatTableDataSource(this.test);
  }

  ngOnInit() {
  }

  tests() {
    console.log('oi');
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
