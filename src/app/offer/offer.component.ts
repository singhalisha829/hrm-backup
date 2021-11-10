import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  isHidden!: boolean;
  public buttonName:any = 'Create New Offer';
  addNewOffer: any = {};
  constructor( public utilsService: UtilsService,) { }

  ngOnInit(): void {
  }

  submit(){

  }

  addOffer(){
    if(!this.isHidden)
    {
      this.buttonName = 'Close';
    }else{
      this.buttonName = 'Create New Offer'
    }
    this.isHidden = !this.isHidden;
  }

    onDateRangeSelection(event: { startDate: string | number | Date; }) {
      this.addNewOffer.date = this.utilsService.formatDate(event.startDate)
  }
  onDateRangeSelection1(event: { startDate: string | number | Date; }) {
    this.addNewOffer.expected_date = this.utilsService.formatDate(event.startDate)
}
  }
    
