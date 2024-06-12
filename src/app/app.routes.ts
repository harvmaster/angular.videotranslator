import { Routes } from '@angular/router';

import { AuthPageComponent } from './modules/auth-page/auth-page.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UploadPageComponent } from './modules/upload-page/upload-page.component';

export const routes: Routes = [
  { path: '', component: AuthPageComponent },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'upload', component: UploadPageComponent },
    ]
  }
];
