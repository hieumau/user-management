import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FundRaisingActivity} from "../../../../shared/model/fund-raising-activity.model";
import {Group} from "../../../../shared/model/group.model";
import {CreateActivityDialogComponent} from "./create-activity-dialog/create-activity-dialog.component";

@Component({
  selector: 'app-fund-raising-management',
  templateUrl: './fund-raising-management.component.html',
  styleUrls: ['./fund-raising-management.component.scss']
})
export class FundRaisingManagementComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  groups: Group[] = []
  activities: FundRaisingActivity[] = []

  displayedColumns: string[] = ['Activity Code', 'Activity Name', 'Target amount', 'Group', 'Beneficiary', 'Targeted Event Date', 'Withdrawal Date', 'Active'];

  ngOnInit(): void {
    this.initData()
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateActivityDialogComponent, {
      width: '900px'
    })

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

    for (let i = 0; i < 10; i++) {
      let activity = new FundRaisingActivity()
      activity.code = 'FRA_' + i
      activity.name = 'Activity ' + i
      activity.targetAmount = 1000 * (i + 1)
      activity.group = this.groups[i]
      activity.beneficiary = 'User ' + i
      activity.targetedEventDate = new Date()
      activity.withdrawalDate = new Date()
      activity.isActive = true

      this.activities.push(activity)
    }

  }
}
