import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-professor',
  templateUrl: './new-professor.component.html',
  styleUrls: ['./new-professor.component.scss']
})
export class NewProfessorComponent implements OnInit {

  listOfSubjects: string[] = ['Matematica Discreta',
    'Cálculo',
    'Laboratório de Banco de Dados',
    'Laboratório de Engenharia de Software',
    'Programação Linear'];

  constructor() { }

  ngOnInit() {
  }

}
