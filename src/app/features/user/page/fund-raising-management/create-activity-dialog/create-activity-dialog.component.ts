import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-create-activity-dialog',
  templateUrl: './create-activity-dialog.component.html',
  styleUrls: ['./create-activity-dialog.component.scss']
})
export class CreateActivityDialogComponent implements OnInit {

  constructor() { }

  contributionPublic: boolean = false

  myControl = new FormControl('');
  options: string[] = ['Group 1', 'Group 2', 'Group 3'];
  filteredOptions: Observable<string[]>;

  myControl2 = new FormControl('');
  options2: string[] = ['User 1', 'User 2', 'User 3'];
  filteredOptions2: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options2.filter(option => option.toLowerCase().includes(filterValue));
  }

}
