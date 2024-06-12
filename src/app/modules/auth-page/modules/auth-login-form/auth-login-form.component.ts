import { Component } from '@angular/core';

// Material UI Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';


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
}
