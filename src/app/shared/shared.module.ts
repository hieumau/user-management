import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {LoginComponent} from "./page/authen/login/login.component";
import {RegisterComponent} from "./page/authen/register/register.component";
import {IndexComponent} from "./page/index/index.component";
import {LandingPageComponent} from "./page/landing-page/landing-page.component";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SharedModule { }
