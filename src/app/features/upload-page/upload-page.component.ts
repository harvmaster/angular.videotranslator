import { Component } from '@angular/core';

import { FileUploadComponent } from './components/file-upload/file-upload.component';

@Component({
  selector: 'app-upload-page',
  standalone: true,
  imports: [FileUploadComponent],
  templateUrl: './upload-page.component.html',
  styleUrl: './upload-page.component.scss'
})
export class UploadPageComponent {
  
}
