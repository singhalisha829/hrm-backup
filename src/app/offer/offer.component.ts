import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  isHidden!: boolean;
  public buttonName:any = 'Create New Offer';
  constructor() { }

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

  onDateRangeSelection(){

  }
}
