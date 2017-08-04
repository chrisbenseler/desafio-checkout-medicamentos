import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private apiservice: ApiService,
    private router: Router
  ) {
    apiservice.loadDrugstores().subscribe();
  }
}
