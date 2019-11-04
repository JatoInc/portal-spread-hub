import { Component, OnInit } from '@angular/core';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  files: FileList;
  constructor(private DocumentService: SpreadHubService) { }

  ngOnInit() {
  }

  async fileSelected(event: any) {
    this.files = event.srcElement.files;
    await this.DocumentService.uploadFiles(this.files);
  }
} 
