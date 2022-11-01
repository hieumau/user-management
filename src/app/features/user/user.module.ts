import {ClipboardModule} from "@angular/cdk/clipboard";
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../../shared/shared.module";

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {GroupManagementComponent} from './page/group-management/group-management.component';
import {FundRaisingManagementComponent} from './page/fund-raising-management/fund-raising-management.component';
import {WalletManagementComponent} from './page/wallet-management/wallet-management.component';
import {UserInfoComponent} from './page/user-info/user-info.component';
import {HomeComponent} from './page/home/home.component';
import {CreateGroupDialogComponent} from './page/group-management/create-group-dialog/create-group-dialog.component';
import {
  CreateGroupSuccessDialogComponent
} from './page/group-management/create-group-success-dialog/create-group-success-dialog.component';
import {JoinGroupDialogComponent} from './page/group-management/join-group-dialog/join-group-dialog.component';
import {
  JoinGroupSuccessfulDialogComponent
} from './page/group-management/join-group-dialog/join-group-successful-dialog/join-group-successful-dialog.component';
import {
  CreateActivityDialogComponent
} from './page/fund-raising-management/create-activity-dialog/create-activity-dialog.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { ActivityDetailsComponent } from './page/fund-raising-management/activity-details/activity-details.component';
import { FundRaisingCardComponent } from './component/fund-raising-card/fund-raising-card.component';
import { FundRaisingIndicatorBarComponent } from './component/fund-raising-indicator-bar/fund-raising-indicator-bar.component';


@NgModule({
  declarations: [
    UserComponent,
    GroupManagementComponent,
    FundRaisingManagementComponent,
    WalletManagementComponent,
    UserInfoComponent,
    HomeComponent,
    CreateGroupDialogComponent,
    CreateGroupSuccessDialogComponent,
    JoinGroupDialogComponent,
    JoinGroupSuccessfulDialogComponent,
    CreateActivityDialogComponent,
    SideNavComponent,
    ActivityDetailsComponent,
    FundRaisingCardComponent,
    FundRaisingIndicatorBarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    ClipboardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    FormsModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    SharedModule
  ],
  providers: []
})
export class UserModule {
}
