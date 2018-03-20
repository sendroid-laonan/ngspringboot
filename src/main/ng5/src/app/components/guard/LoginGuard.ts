import {CanActivate} from '@angular/router';
/** Created by laonan on 2018-03-13*/
export class LoginGuard implements CanActivate {

  canActivate() {

    const loggedIn: boolean = Math.random() < 0.5;

    if (!loggedIn) {
      console.log('用户为登录');
    }
    return loggedIn;
  }

}
