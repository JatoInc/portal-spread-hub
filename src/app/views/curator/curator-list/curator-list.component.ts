import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curator-list',
  templateUrl: './curator-list.component.html',
  styleUrls: ['./curator-list.component.scss']
})
export class CuratorListComponent implements OnInit {
  dataSource: any = []
  test: any = []

  displayedColumns: string[] = ['id', 'value'];


  name: string;
  position: number;
  weight: number;
  symbol: string;

  ELEMENT_DATA: any;

  constructor() {
    this.test = [
      {
        "position": 1,
        "name": "asd"
      },
      {
        "position": 2,
        "name": "dd"
      },
      {
        "position": 3,
        "name": "avvsd"
      },
    ]
    this.dataSource = this.test;
   }

  ngOnInit() {    
  }

}
