import { Component, OnInit } from '@angular/core';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  files: FileList;

  allFiles: any;
  

  constructor(private spreadHubService: SpreadHubService) { }

  async ngOnInit() {
    await this.getDocuments();
  }

  async getDocuments() {
    this.allFiles = await this.spreadHubService.getDocuments();
    console.log('this.allFiles :', this.allFiles);
  }  

  test() {
    console.log('clicou');
  }
  
  async fileSelected(event: any) {
    this.files = event.srcElement.files;
    let a: any;
    a = await this.spreadHubService.uploadFiles(this.files);

    a.forEach(element => {
      this.allFiles.push(element._doc)
    });
    console.log('a :', a);

  }
} 
