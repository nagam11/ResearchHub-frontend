/**
 * Created by marlanarazani on 16.07.17.
 */
import { Injectable }    from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad } from '@angular/router';;
import { AuthenticationService } from '../services/authentication.service';
import { Profile } from '../services/profile.service';

@Injectable()
export class AcademicGuard implements CanActivate {

  constructor(private router: Router, private userService: Profile) {}

  public canActivate() {
    let currentUser = this.userService.getThisUserInfo();
    if (currentUser === 'academics') {
      return true;
    } else {
      return false;
    }
  }
}
