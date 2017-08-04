import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ApiService } from '../services/api.service';

@Injectable()
export class BillExistsGuard implements CanActivate {

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}



  canActivate(): Observable<boolean> {

    return of(!!this.apiService.lastBill)
  }

}
