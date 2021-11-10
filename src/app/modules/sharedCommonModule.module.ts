import { DropDownModule } from './../sharedComponents/dropDown/dropdown.module';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
//import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
// import { PermissionPipe, TimeSincePipe, DateSincePipe } from '../utils/sharedComponents/appPipe';
 import { CommonTableModule } from '../sharedComponents/common-table/common-table.module';
 import { CustomDateRangePickerModule } from '../sharedComponents/custom-date-range-picker/custom-date-range-picker.module';
// import { AllowSingleClickDirective } from '../utils/services/allow-single-click.directive';
// import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    // PermissionPipe,
    // TimeSincePipe,
    // DateSincePipe,
    // AllowSingleClickDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    //NgxPrintModule,
    ReactiveFormsModule,
    //PaginationModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      tapToDismiss: false,
      enableHtml: true,
      timeOut: 5000,
    }),
    DropDownModule,
    BsDatepickerModule.forRoot(),
    //LoadingBarModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    //NgxChartsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
     CommonTableModule,
    CustomDateRangePickerModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    //LoadingBarModule,
    ToastrModule,
    DropDownModule,
    BsDatepickerModule,
    PaginationModule,
    NgxDaterangepickerMd,
    TooltipModule,
    BsDatepickerModule,
    DatepickerModule,
    CollapseModule,
    //NgxChartsModule,
    BsDropdownModule,
    ModalModule,
    AlertModule,
    // PermissionPipe,
    // TimeSincePipe,
    // DateSincePipe,
     CommonTableModule,
     CustomDateRangePickerModule,
    // AllowSingleClickDirective,
    // NgxPrintModule
  ],
  providers: [],
})
export class SharedCommonModule { }
