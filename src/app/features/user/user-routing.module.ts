import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAddComponent} from "./component/user-add/user-add.component";
import {UserListComponent} from "./component/user-list/user-list.component";
import {UserComponent} from "./user.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'add',
        component: UserAddComponent
      },
      {
        path: 'users/:name',
        component: UserAddComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
