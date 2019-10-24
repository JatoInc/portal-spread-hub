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
  professors: any = [];

  displayedColumns: string[] = ['name', 'document', 'telephone', 'email', 'options'];

  constructor(private router: Router, private spreadHubService: SpreadHubService) {
    this.professors = [
      {
        "id": 1,
        "name": "Jonatas",
        "document": "1234567890",
        "telephone": "(13)28192-2321",
        "email": "jonatass@fatecpg.br",
        "courses": ["Sistemas da Informação", "Engenharia de Software 2"]
      },
      {
        "id": 2,
        "name": "Rodrigo Salgado",
        "document": "1092831728",
        "telephone": "(13)98821-3920",
        "email": "rodrigos@fatecpg.br",
        "courses": ["Laboratório de Engenharia de Software"],
      },
      {
        "id": 3,
        "name": "Simone Vieira",
        "document": "4261872618",
        "telephone": "(11)98928-3920",
        "email": "simonev@fatecpg.br",
        "courses": ["Laboratório de Banco de Dados", "Engenharia de Software 2", "Banco de Dados"],
      },
      {
        "id": 4,
        "name": "Paulo Cândido",
        "document": "9823019283",
        "telephone": "(13)3472-6029",
        "email": "pauloc@fatecpg.br",
        "courses": ["VBA"],
      },
    ]
    this.dataSource = new MatTableDataSource(this.professors);
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
    this.professors = await this.spreadHubService.getProfessors();
    console.log('this.professors :', this.professors);
  }

  enterDetails(id) {
    console.log('id :', id);
    this.router.navigate(['/professors', id]);
  }
}
