import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from '../app/hello-world/hello-world.component';
import { LoginComponent } from '../app/views/login/login.component';


const routes: Routes = [
  {
    path: 'hello-world', component: HelloWorldComponent,
  },
  {
    path: 'login', component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
