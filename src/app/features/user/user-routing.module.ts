import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "../../shared/page/index/index.component";
import {FundRaisingManagementComponent} from "./page/fund-raising-management/fund-raising-management.component";
import {GroupManagementComponent} from "./page/group-management/group-management.component";
import {HomeComponent} from "./page/home/home.component";
import {WalletManagementComponent} from "./page/wallet-management/wallet-management.component";
import {UserComponent} from "./user.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'groups',
        component: GroupManagementComponent
      },
      {
        path: 'funds',
        component: FundRaisingManagementComponent
      },
      {
        path: 'wallet',
        component: WalletManagementComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
