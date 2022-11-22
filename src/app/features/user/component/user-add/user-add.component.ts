import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor() { }

  jobs: any[] = ['A', 'B', 'C', 'D']


  ngOnInit(): void {
  }


}
