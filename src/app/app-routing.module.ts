import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./shared/page/authen/login/login.component";
import {RegisterComponent} from "./shared/page/authen/register/register.component";
import {IndexComponent} from "./shared/page/index/index.component";
import {LandingPageComponent} from "./shared/page/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
