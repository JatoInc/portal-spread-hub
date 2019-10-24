import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-curator-details',
  templateUrl: './curator-details.component.html',
  styleUrls: ['./curator-details.component.scss']
})
export class CuratorDetailsComponent implements OnInit {

  dataSource: any = [];
  test: any = []

  displayedColumns: string[] = ['name', 'document', 'gender', 'dataNasc'];
  displayedColumnsSecond: string[] = ['adress', 'email', 'telephone'];
  ELEMENT_DATA: any;

  constructor() {
    this.test = [
      { 
        "name": "Carlos Malaquias",
        "document": "1234567890",
        "gender": "Masculino",
        "dataNasc": "22/12/1990",
        "adress": "bololo adwadaw",
        "email": "carlinhosmalaca@fatecpg.com.br",
        "telephone": "(12)9999-12345",
      },
    ]
    this.dataSource = new MatTableDataSource(this.test);
  }

  ngOnInit() {
  }

}
