import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { MatIconRegistry } from '@angular/material/icon';

provideHttpClient(withInterceptorsFromDi());

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private matIconReg: MatIconRegistry
  ) {}

  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}

