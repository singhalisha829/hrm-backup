import { UtilsService } from 'src/app/services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  isHidden!: boolean;
  public buttonName:any = 'Create New Appointment Letter';
  addNewAppoint: any = {};
  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  addAppointment(){
    if(!this.isHidden)
    {
      this.buttonName = 'Close';
    }else{
      this.buttonName = 'Create New Appointment Letter'
    }
    this.isHidden = !this.isHidden;
  }

  onDateRangeSelection(event: { startDate: string | number | Date; }) {
    this.addNewAppoint.date = this.utilsService.formatDate(event.startDate)
}
onDateRangeSelection1(event: { startDate: string | number | Date; }) {
  this.addNewAppoint.expected_date = this.utilsService.formatDate(event.startDate)
}

  submit(){

  }

}
