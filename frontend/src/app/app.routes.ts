import { RouterModule, Routes } from '@angular/router';

import { PrescriptionPageComponent } from './pages/prescription-page/prescription-page.component';
import { BillPageComponent } from './pages/bill-page/bill-page.component';

import { BillExistsGuard } from './guards/bill-exists.guard';

export const appRoutes: Routes = [
  { path: 'prescription', component: PrescriptionPageComponent },
  { path: 'bill', canActivate: [ BillExistsGuard ], component: BillPageComponent },
  { path: '', redirectTo: '/prescription', pathMatch: 'full' },
];
