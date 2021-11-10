import { HttpService } from './utils/services/http.service';
import { LoginService } from './utils/services/login.service';
import { UtilsService } from 'src/app/services/utils.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreServiceModule } from './modules/coreService.module';
//import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


import { AppRoutingModule, componentsArr } from './app-routing.module';
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
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-tabset';
import { SickLeaveComponent } from './sick-leave/sick-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    SidebarComponent,
    HeaderComponent,
    componentsArr,
    EmployeeComponent,
    OfferComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    SickLeaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    HttpModule,
    CoreServiceModule,
    //TabsModule.forRoot(),
    ToastrModule.forRoot(),
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
