import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from '../views/hello-world/hello-world.component';
import { RouterModule } from '@angular/router';
import { CuratorComponent } from '../views/curator/curator.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../views/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CuratorComponent,
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
