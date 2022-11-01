import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {RouterLink} from "@angular/router";
import {DonorItemComponent} from "./component/donor-item/donor-item.component";
import {FundRaisingCardComponent} from "./component/fund-raising-card/fund-raising-card.component";
import {
  FundRaisingIndicatorBarComponent
} from "./component/fund-raising-indicator-bar/fund-raising-indicator-bar.component";
import {SideNavComponent} from "./component/side-nav/side-nav.component";
import {LoginComponent} from "./page/authen/login/login.component";
import {RegisterComponent} from "./page/authen/register/register.component";
import {IndexComponent} from "./page/index/index.component";
import {LandingPageComponent} from "./page/landing-page/landing-page.component";
import {MaterialElevationDirective} from './directive/material-elevation.directive';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingPageComponent,
    MaterialElevationDirective,
    SideNavComponent,
    FundRaisingCardComponent,
    FundRaisingIndicatorBarComponent,
    DonorItemComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingPageComponent,
    MaterialElevationDirective,
    SideNavComponent,
    FundRaisingCardComponent,
    FundRaisingIndicatorBarComponent,
    DonorItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    RouterLink,
    MatGridListModule
  ]
})
export class SharedModule {
}
