import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Group} from "../../../../shared/model/group.model";
import {CreateActivityDialogComponent} from "./create-activity-dialog/create-activity-dialog.component";

@Component({
  selector: 'app-fund-raising-management',
  templateUrl: './fund-raising-management.component.html',
  styleUrls: ['./fund-raising-management.component.scss']
})
export class FundRaisingManagementComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  groups: Group[] = []
  displayedColumns: string[] = ['Join Code', 'Name', 'Owner', 'Co-owner'];
  ngOnInit(): void {
    this.initData()
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateActivityDialogComponent)

    dialogRef.afterClosed().subscribe(result => {

    })
  }

  private initData() {
    for (let i = 0; i < 10; i++) {
      let group = new Group()
      group.groupCoOwner = i
      group.groupName = 'group ' + i
      group.joinCode = 'JOINCODE ' + i
      group.groupOwner = i

      this.groups.push(group);
    }
  }
}
