import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { NewCuratorComponent } from './views/curator/new-curator/new-curator.component';
import { CuratorDetailsComponent } from './views/curator/curator-details/curator-details.component';
import { CuratorListComponent } from './views/curator/curator-list/curator-list.component';
import { NewProfessorComponent } from './views/professor/new-professor/new-professor.component';
import { ProfessorDetailsComponent } from './views/professor/professor-details/professor-details.component';
import { ProfessorListComponent } from './views/professor/professor-list/professor-list.component';
import { NewStudentComponent } from './views/student/new-student/new-student.component';
import { StudentDetailsComponent } from './views/student/student-details/student-details.component';
import { StudentListComponent } from './views/student/student-list/student-list.component';

import { MatTableModule } from '@angular/material';
// import { MatFormField } from '@angular/material/form-field';
import { MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material'
import { MatGridListModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';

import { MatPaginatorIntl } from '@angular/material';
import { CustomPaginator } from '../app/services/custom-label-paginator';
import { MainNavComponent } from './infra/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewCuratorComponent,
    CuratorDetailsComponent,
    CuratorListComponent,
    NewProfessorComponent,
    ProfessorDetailsComponent,
    ProfessorListComponent,
    NewStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    // MatFormField,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule
  ],
  // exports: [RouterModule],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
