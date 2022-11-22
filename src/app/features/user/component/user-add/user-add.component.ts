import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../../shared/model/user.model";
import {UserService} from "../../../../shared/service/user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  urlName: string | null

  constructor(
    private snackBar: MatSnackBar,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const routeParams = this.route.snapshot.paramMap;
    this.urlName = routeParams.get('name');
  }

  currentName: string
  jobs: any[] = ['A', 'B', 'C', 'D']

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    if (this.urlName) {
      this.userForm.get('name')?.setValue(this.urlName)
      this.userForm.get('name')?.disable()

    }
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
