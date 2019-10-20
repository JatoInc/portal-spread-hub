import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.scss']
})
export class ProfessorDetailsComponent implements OnInit {
  dataSource: any = []
  test: any = []

  displayedColumns: string[] = ['id', 'value'];


  name: string;
  position: number;
  weight: number;
  symbol: string;

  ELEMENT_DATA: any;

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
