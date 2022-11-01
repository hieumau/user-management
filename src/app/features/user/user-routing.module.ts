import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "../../shared/page/index/index.component";
import {ActivityDetailsComponent} from "./page/fund-raising-management/activity-details/activity-details.component";
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
        path: '',
        component: HomeComponent
      },
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
      {
        path: 'activity-details',
        component: ActivityDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
