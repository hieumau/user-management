import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { GroupManagementComponent } from './page/group-management/group-management.component';
import { FundRaisingManagementComponent } from './page/fund-raising-management/fund-raising-management.component';
import { WalletManagementComponent } from './page/wallet-management/wallet-management.component';
import { UserInfoComponent } from './page/user-info/user-info.component';


@NgModule({
  declarations: [
    UserComponent,
    GroupManagementComponent,
    FundRaisingManagementComponent,
    WalletManagementComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
