import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from '../views/hello-world/hello-world.component';
import { CuratorComponent } from '../views/curator/curator.component';


const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent},
  { path: 'curator', component: CuratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
