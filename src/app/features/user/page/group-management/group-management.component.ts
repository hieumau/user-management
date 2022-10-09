import { Component, OnInit } from '@angular/core';
import {Group} from "../../../../shared/model/group.model";

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {

  constructor() { }

  groups: Group[] = []
  displayedColumns: string[] = ['Join Code', 'Name', 'Owner', 'Co-owner'];
  ngOnInit(): void {
    this.initData()
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
