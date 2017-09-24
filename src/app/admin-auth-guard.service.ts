import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService) { }

  canActivate() {
      return this.auth.appUser$
      .map( appUser => appUser.isAdmin);
  }

}
