import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../../../../shared/model/user.model";
import {UserService} from "../../../../shared/service/user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private userService: UserService,
  ) {
  }

  jobs: any[] = ['A', 'B', 'C', 'D']

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  onAdd() {
    let user = new User()
    user.name = this.userForm.get('name')?.value
    user.job = this.userForm.get('job')?.value
    if (this.userForm.valid) {
      this.userService.createUser(user).then(result => {

      })
        .catch(error => {

        }).finally(() => {
        this.snackBar.open('Add user successful!', '', {duration: 3000})

      })
      console.log(user)
    } else {

      if (!user.name) {
        this.snackBar.open('Name is required!', '', {duration: 3000})
      }
      if (!user.job) {
        this.snackBar.open('Job is required!', '', {duration: 3000})
      }
    }
  }
}
