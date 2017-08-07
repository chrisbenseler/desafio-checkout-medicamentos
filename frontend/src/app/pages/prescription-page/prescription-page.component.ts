import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-prescription-page',
  templateUrl: './prescription-page.component.html',
  styleUrls: ['./prescription-page.component.scss']
})
export class PrescriptionPageComponent implements OnInit {

  prescription = {
    date: (new Date()).toLocaleString('pt-br', { year: 'numeric', month: 'long', day: 'numeric' }),
    items: [
      { name: 'Ácido zoledrônico 4mg', amount: 1},
      { name: 'Água para injeção 1mL', amount: 1},
      { name: 'Betaserc 16mg', amount: 1}
    ]
  };

  constructor(
    private apiservice: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getBill(event) {

    this.apiservice.calculateBill(this.prescription.items).subscribe( data => {
      this.apiservice.lastBill = data;
      this.router.navigate(['bill']);
    });
  }

}
