import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SaveData(myform: NgForm) {
    console.log(myform.value);
  }

}
