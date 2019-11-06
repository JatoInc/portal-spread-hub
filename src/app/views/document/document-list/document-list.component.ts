import { Component, OnInit } from '@angular/core';
import { SpreadHubService } from '../../../infra/services/spread-hub-api.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  files: FileList;
  url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY73b6hDAn-GPu5H5mVbX2OY27hT1Uw3DSqlDH6WMLGU-aVshpHA&s'
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
