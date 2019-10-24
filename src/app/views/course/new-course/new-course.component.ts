import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  subject: any;
  subjects: any = [];

  constructor() {
    this.subjects = [
      {
        "id": 1,
        "name": "Matemática Discreta"
      },
      {
        "id": 2,
        "name": "Banco de Dados"
      },
      {
        "id": 3,
        "name": "Laboratório de Engenharia de Software"
      },
    ]
   };

  ngOnInit() {
  }

  addSubject() {
    let id = this.subjects[this.subjects.length - 1].id;
    this.subjects.push({id: id + 1, name: this.subject});

    // chamar service pra inserir a disciplina
  }

  removeSubject(id, i) {
    this.subjects.splice(i, 1);

    // chamar service para apagar disciplina
  }

}
