import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CuratorComponent } from './views/curator/curator.component';
import { StudentComponent } from './views/student/student.component';
import { ProfessorComponent } from './views/professor/professor.component';
import { LoginComponent } from './views/login/login.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CuratorComponent,
    StudentComponent,
    ProfessorComponent,
    LoginComponent
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
