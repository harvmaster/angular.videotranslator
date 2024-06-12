import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MatDivider, MatIconModule, MatButtonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  arr = new Array(100).fill(0)
}
