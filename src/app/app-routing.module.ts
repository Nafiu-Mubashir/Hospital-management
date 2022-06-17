import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashNavComponent } from './dash-nav/dash-nav.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {path: "sign_in", component:SigninComponent},
  {path: "sign_up", component:SignupComponent},
  {path: "contact", component:ContactComponent},
  {path: "dash", component:DashNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
