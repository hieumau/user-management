import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Group} from "../../../../shared/model/group.model";
import {CreateGroupDialogComponent} from "./create-group-dialog/create-group-dialog.component";
import {CreateGroupSuccessDialogComponent} from "./create-group-success-dialog/create-group-success-dialog.component";
import {JoinGroupDialogComponent} from "./join-group-dialog/join-group-dialog.component";
import {
  JoinGroupSuccessfulDialogComponent
} from "./join-group-dialog/join-group-successful-dialog/join-group-successful-dialog.component";

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  groups: Group[] = []
  displayedColumns: string[] = ['Join Code', 'Name', 'Owner', 'Co-owner'];
  ngOnInit(): void {
    this.initData()
  }


  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.openCreateSuccessfulDialog()
    })
  }

  openCreateSuccessfulDialog() {
    const dialogRef = this.dialog.open(CreateGroupSuccessDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openJoinGroupDialog() {
    const dialogRef = this.dialog.open(JoinGroupDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      this.openJoinGroupSuccessfulDialog()
    })
  }

  openJoinGroupSuccessfulDialog() {
    const dialogRef = this.dialog.open(JoinGroupSuccessfulDialogComponent)

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
