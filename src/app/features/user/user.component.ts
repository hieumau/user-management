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
      displayName: 'UserName',
      iconName: 'account_circle',
      children: [
        {
          displayName: 'Profile',
          iconName: 'info',
          route: 'user-profile'
        },
        {
          displayName: 'Logout',
          iconName: 'exit_to_app',
          route: 'logout'
        }
      ]
    },
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'dashboard'
    },
    {
      displayName: 'Fund Raising Activity',
      iconName: 'local_activity',
      children: [
        {
          displayName: 'Public Activity',
          iconName: 'public',
          route: '/fund-activity/public'
        },
        {
          displayName: 'Private Activity',
          iconName: 'lock',
          route: '/fund-activity/private'
        },
        {
          displayName: 'Create Activity',
          iconName: 'create',
          route: '/fund-activity/create'
        },
      ]
    },
    {
      displayName: 'Group',
      iconName: 'group',
      children: [
        {
          displayName: 'Owned Group',
          iconName: 'gavel',
          route: '/group/owned'
        },
        {
          displayName: 'Joined Group',
          iconName: 'group_work',
          route: '/group/joined'
        },
        {
          displayName: 'Create Group',
          iconName: 'create',
          route: '/group/create'
        }
      ]
    }
  ];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

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
