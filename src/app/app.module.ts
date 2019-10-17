import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { NavbarComponent } from './infra/navbar/navbar.component';
import { NewCuratorComponent } from './views/curator/new-curator/new-curator.component';
import { CuratorDetailsComponent } from './views/curator/curator-details/curator-details.component';
import { CuratorListComponent } from './views/curator/curator-list/curator-list.component';
import { NewProfessorComponent } from './views/professor/new-professor/new-professor.component';
import { ProfessorDetailsComponent } from './views/professor/professor-details/professor-details.component';
import { ProfessorListComponent } from './views/professor/professor-list/professor-list.component';
import { NewStudentComponent } from './views/student/new-student/new-student.component';
import { StudentDetailsComponent } from './views/student/student-details/student-details.component';
import { StudentListComponent } from './views/student/student-list/student-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NewCuratorComponent,
    CuratorDetailsComponent,
    CuratorListComponent,
    NewProfessorComponent,
    ProfessorDetailsComponent,
    ProfessorListComponent,
    NewStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
