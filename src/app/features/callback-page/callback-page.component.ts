import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-callback-page',
  standalone: true,
  imports: [],
  templateUrl: './callback-page.component.html',
  styleUrl: './callback-page.component.scss'
})
export class CallbackPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const accessToken = this.route.snapshot.queryParamMap.get('access_token');
    if (!accessToken) {
      console.log('no access token')
      this.router.navigate(['/']);
    }

    console.log(accessToken);
    this.router.navigate(['/upload']);
  }
}
