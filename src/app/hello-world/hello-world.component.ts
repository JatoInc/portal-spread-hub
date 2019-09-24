import { Component, OnInit } from '@angular/core';
import { SpreadHubService } from '../services/spread-hub-api.service'

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  content: any;

  constructor(
    private spreadHubService: SpreadHubService
  ) { }

  async ngOnInit() {
    this.content = await this.spreadHubService.helloWorld();
    console.log('this.content :', this.content);
  }

}
