import { Component, OnInit } from '@angular/core';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  files: FileList;

  allFiles = [
    {
      "name": "arquivo",
      "uploadedAt": "arquivo",
      "approvedAt": "arquivo",
      "filePath": "arquivo",
      "uploadedBy": "arquivo",
      "approvedBy": "arquivo",
      "subject": "123"
    },
    {
      "name": "arquivo",
      "uploadedAt": "arquivo",
      "approvedAt": "arquivo",
      "filePath": "arquivo",
      "uploadedBy": "arquivo",
      "approvedBy": "arquivo",
      "subject": "123"
    },
    {
      "name": "arquivo",
      "uploadedAt": "arquivo",
      "approvedAt": "arquivo",
      "filePath": "arquivo",
      "uploadedBy": "arquivo",
      "approvedBy": "arquivo",
      "subject": "123"
    },
    {
      "name": "arquivo",
      "uploadedAt": "arquivo",
      "approvedAt": "arquivo",
      "filePath": "arquivo",
      "uploadedBy": "arquivo",
      "approvedBy": "arquivo",
      "subject": "123"
    },
  ]
  

  constructor(private DocumentService: SpreadHubService) { }

  async ngOnInit() {
  }
  
  async fileSelected(event: any) {
    const auth: any = await this.DocumentService.getAuthToken('christianmouraa@gmail.com', 'teste@123');
    localStorage.setItem('auth_token', auth.token);
    this.files = event.srcElement.files;
    // await this.DocumentService.uploadFiles(this.files);
  }
} 
