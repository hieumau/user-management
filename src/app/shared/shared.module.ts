import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MatMomentDateModule,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import {
  MaxDateRangeSelectorComponent,
  MaxRangeDirective
} from "./component/date-range-selector/date-range-selector.component";
import {LoginComponent} from "./page/authen/login/login.component";
import {RegisterComponent} from "./page/authen/register/register.component";
import {IndexComponent} from "./page/index/index.component";
import {MaterialElevationDirective} from './directive/material-elevation.directive';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    MaterialElevationDirective,
    MaxRangeDirective,
    MaxDateRangeSelectorComponent,

  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    MaterialElevationDirective,
    MaxDateRangeSelectorComponent,
    MaxRangeDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    RouterLink,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatMomentDateModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: {useUtc: true}}
  ]
})
export class SharedModule {
}
