import {MediaMatcher} from "@angular/cdk/layout";
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NavItem} from "../../shared/model/nav-item";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  menu: NavItem [] = [
    {
      displayName: 'User Management',
      iconName: 'account_circle',
      route: '/user/list'
    },
    {
      displayName: 'Add User',
      iconName: 'account_circle',
      route: '/user/add'
    },
    {
      displayName: 'Logout',
      iconName: 'exit_to_app',
      route: '/logout'
    }
  ];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  sideNavOpen: boolean = true;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {

  }

}
