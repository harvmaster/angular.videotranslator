import { Routes } from '@angular/router';

import { AuthPageComponent } from './features/auth-page/auth-page.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UploadPageComponent } from './features/upload-page/upload-page.component';
import { CallbackPageComponent } from './features/callback-page/callback-page.component';

export const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'callback', component: CallbackPageComponent },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'upload', component: UploadPageComponent },
    ]
  }
];
