import {resolve} from "@angular/compiler-cli";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {PageData} from "../../../../shared/model/page-data";
import {User} from "../../../../shared/model/user.model";
import {UserService} from "../../../../shared/service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
  }

  userPage: PageData<User>
  displayedColumns: string[] = ['id', 'avatar', 'first_name', 'last_name', 'email'];
  dataSource: MatTableDataSource<User>
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.userService.getListUser(10, 1).then((result) => {
      this.userPage = result
      if (this.userPage.data) {
        console.log(this.userPage)
        this.dataSource = new MatTableDataSource<User>(this.userPage.data)
        this.dataSource.paginator = this.paginator;

      }

    })
      .catch(error => {
        this.snackBar.open(error, 'Close', {duration: 4000})
      })
  }

}
