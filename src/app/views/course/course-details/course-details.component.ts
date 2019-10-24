import { Component, OnInit } from '@angular/core';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  id: any;
  course: any;
  courseName: any;
  subject: any;
  subjects: any = [];

  constructor(private spreadHubService: SpreadHubService, private router: Router, private route: ActivatedRoute) {
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

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    await this.getCourse()
  }

  async getCourse() {
    this.course = await this.spreadHubService.getCourseById(this.id);
    this.courseName = this.course.name
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
