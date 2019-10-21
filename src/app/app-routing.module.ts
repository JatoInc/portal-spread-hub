import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/views/login/login.component';

import { ProfessorListComponent } from './views/professor/professor-list/professor-list.component';
import { ProfessorDetailsComponent} from './views/professor/professor-details/professor-details.component';
import { NewProfessorComponent } from './views/professor/new-professor/new-professor.component'

import { StudentListComponent } from './views/student/student-list/student-list.component';
import { CuratorListComponent } from './views/curator/curator-list/curator-list.component';
import { CuratorDetailsComponent } from './views/curator/curator-details/curator-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'professors', component: ProfessorListComponent },
  { path: 'professors/:id', component: ProfessorDetailsComponent },
  { path: 'professors/new/professor', component: NewProfessorComponent },

  { path: 'curators', component: CuratorListComponent },
  { path: 'curators/:id', component: CuratorDetailsComponent },

  { path: 'students', component: StudentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
