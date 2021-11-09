import { HttpService } from './utils/services/http.service';
import { LoginService } from './utils/services/login.service';
import { UtilsService } from 'src/app/services/utils.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreServiceModule } from './modules/coreService.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { OfferComponent } from './offer/offer.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CustomDateRangePickerModule } from './sharedComponents/custom-date-range-picker/custom-date-range-picker.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    SidebarComponent,
    HeaderComponent,
    EmployeeComponent,
    OfferComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    HttpModule,
    CoreServiceModule,
    NgxDaterangepickerMd.forRoot({
      format: 'DD/MM/YYYY', // could be 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
      displayFormat: 'DD/MM/YYYY', // default is format value
    }),
    CustomDateRangePickerModule,
  
  ],
  providers: [
    UtilsService,
    LoginService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
