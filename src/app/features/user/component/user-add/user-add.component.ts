import { Component, OnInit } from '@angular/core';
import moment from "moment";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor() { }

  jobs: any[] = ['A', 'B', 'C', 'D']

  dateRange = {
    dates: {
      start: moment().add(0, 'day'),
      end: moment().add(0, 'day'),
    },
    type: 'init'
  };

  ngOnInit(): void {
  }

  onDateRangeChange(event: any) {
    this.dateRange = event;
  }

}
