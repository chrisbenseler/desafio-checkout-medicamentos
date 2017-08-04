import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';

import { appRoutes } from './app.routes';

import { PrescriptionPageComponent } from './pages/prescription-page/prescription-page.component';
import { BillPageComponent } from './pages/bill-page/bill-page.component';

import { BillExistsGuard } from './guards/bill-exists.guard';
import { FormatCurrencyPipe } from './pipes/format-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrescriptionPageComponent,
    BillPageComponent,
    FormatCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes ),
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [ ApiService, BillExistsGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
