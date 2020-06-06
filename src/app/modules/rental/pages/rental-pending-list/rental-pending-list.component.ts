import {Component, OnInit} from '@angular/core';
import {RentalService} from "../../rental.service";
import {IRental} from "../../rental.models";

@Component({
  templateUrl: './rental-pending-list.component.html',
  styleUrls: ['./rental-pending-list.component.scss']
})
export class RentalPendingListComponent implements OnInit {

  list: IRental[];

  constructor(
    public rentalService: RentalService,
  ) {

  }

  ngOnInit() {
    this.rentalService.getAllPending().toPromise().then(res => this.list = res);
  }

}
