import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  lastBill: any = null;

  constructor(
    private http: HttpClient
  ) { }

  loadDrugstores() {
    return this.http.get('http://localhost:3001/farmacias/');
  }

  calculateBill(medicines) {
    return this.http.post('http://localhost:3001/farmacias/calculo', { medicines });
  }

  get bill() {
    return this.lastBill;
  }

  set bill(bill) {
    this.lastBill = bill;
  }

}
