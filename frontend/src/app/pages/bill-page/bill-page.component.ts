import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {

  billData: any = null;
  userPosition = { lat: -23.5648304, lng: -46.6436604 };
  distance: number = null;

  constructor(
    private apiservice: ApiService,
  ) { }

  ngOnInit() {

    this.billData = this.apiservice.lastBill;

    const distance = this.apiservice.getDistanceFromLatLonInKm(
      this.userPosition.lat,
      this.userPosition.lng,
      this.billData.drugstore.position.lat,
      this.billData.drugstore.position.lng
    );

    this.distance = Math.round(distance * 1000);
  }

}
