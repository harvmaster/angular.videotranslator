import { Component, Input } from '@angular/core';

// Material UI Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';


import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-auth-login-form',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatButton, MatDivider, MatIcon ],
  templateUrl: './auth-login-form.component.html',
  styleUrl: './auth-login-form.component.scss'
})
export class AuthLoginFormComponent {
  constructor(private matIconRegistry: MatIconRegistry){
    this.matIconRegistry.addSvgIcon(
      `google`,
      `icons/Google_Logo.svg`
    );
  }

  @Input() email: string = '';
  @Input() password: string = '';

  routeToGoogleLogin() {
    // Route to Google login page
    document.location.href = `${environment.api_base}/users/google`;
  }

  async loginWithEmail() {
    console.log('Logging in with email and password')
    console.log(this.email, this.password)
  }

  
}
