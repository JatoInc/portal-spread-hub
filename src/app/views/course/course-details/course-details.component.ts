import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  subject: any;
  subjects: any = [];
  courseName = "Análise e Desenvolvimento de Dados"

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
  }

  ngOnInit() {
  }

  addSubject() {
    let id = this.subjects[this.subjects.length - 1].id;
    this.subjects.push({ id: id + 1, name: this.subject });

    this.subject = "";

    // chamar service pra inserir a disciplina
  }

  removeSubject(id, i) {
    this.subjects.splice(i, 1);

    // chamar service para apagar disciplina
  }

}
