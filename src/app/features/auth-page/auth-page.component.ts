import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { AuthLoginFormComponent } from './components/auth-login-form/auth-login-form.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [AuthLoginFormComponent, MatButtonModule, MatIconModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {

}
