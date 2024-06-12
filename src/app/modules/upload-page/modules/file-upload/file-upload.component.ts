import { Component } from '@angular/core';

import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatInput } from '@angular/material/input';

import colors from 'tailwindcss/colors';
// import { ProgressWheelComponent } from '../../../../shared/progress-wheel/progress-wheel.component';

import { RoundProgressComponent } from 'angular-svg-round-progressbar';


@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatLabel, MatButtonModule, MatFormFieldModule, MatIconModule, MatDivider, MatProgressBar,  MatInput, RoundProgressComponent],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  colors = colors;
}
