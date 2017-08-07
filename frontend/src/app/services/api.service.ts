import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  lastBill: any = null;

  constructor(
    private http: HttpClient
  ) { }

  get bill() {
    return this.lastBill;
  }

  set bill(bill) {
    this.lastBill = bill;
  }

  calculateBill(medicines) {
    return this.http.post('http://localhost:3001/farmacias/calculo', { medicines });
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    const dLon = this.deg2rad(lon2-lon1);
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

}
