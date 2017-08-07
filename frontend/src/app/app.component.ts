import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dr. Memed';

  hasBackButton = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    //console.log(this.route.pathFromRoot)
    //this.route.
    this.route.url.subscribe( url => {
      //console.log(url)
    })

    this.router.navigated

    this.router.events.subscribe( (e: any) => {
      if(this.router.navigated) {
        this.router.navigated = false;
        this.hasBackButton = e.url.indexOf('prescription') < 0;
      }
    })
  }

  back(event) {
    this.location.back()
  }
}
