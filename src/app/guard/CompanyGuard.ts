import { Injectable }    from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad } from '@angular/router';;
import { AuthenticationService } from '../services/authentication.service';
import { Profile } from '../services/profile.service';

@Injectable()
export class CompanyGuard implements CanActivate {

  constructor(private router: Router, private userService: Profile) {}

  public canActivate() {
    let currentUser = this.userService.getThisUserInfo();
    if (currentUser === 'companyUsers') {
      return true;
    } else {
      return false;
    }
  }
}
