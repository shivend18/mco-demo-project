import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McoDisplayListComponent } from './mco-display-list/mco-display-list.component';
import { McoLandingPageComponent } from './mco-landing-page/mco-landing-page.component';
import { McoCardDetailsComponent } from './mco-card-details/mco-card-details.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {GoogleChartsModule} from 'angular-google-charts';

@NgModule({
  declarations: [
    McoDisplayListComponent,
    McoLandingPageComponent,
    McoCardDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule
  ],
  exports: [McoLandingPageComponent]
})
export class McoModuleModule { }
