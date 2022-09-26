import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {IndexComponent} from "./features/index/index.component";
import {LandingPageComponent} from "./features/landing-page/landing-page.component";

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
  // },
  {
    path: '**',
    redirectTo: 'landing'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
