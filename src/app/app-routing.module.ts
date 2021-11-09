import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { OfferComponent } from './offer/offer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
    {
      path: '',
      component:HomeComponent,
      children: [
        {
        path: '',
          redirectTo: 'welcome',
          pathMatch: 'full',
        },
        {
          path: 'welcome',
          component: WelcomeComponent,
        },
  {
    path:'attendance',
    component:AttendanceComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'offer-letter',
    component:OfferComponent
  },]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
