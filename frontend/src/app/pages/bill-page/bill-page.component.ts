import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.css']
})
export class BillPageComponent implements OnInit {

  billData: any = null;

  constructor(
    private apiservice: ApiService,
  ) { }

  ngOnInit() {

    this.billData = this.apiservice.lastBill;

  }

}
