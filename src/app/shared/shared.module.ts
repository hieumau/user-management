import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
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
        MatExpansionModule
    ]
})
export class SharedModule {
}
