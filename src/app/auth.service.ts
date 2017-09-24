import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

import { AppUser } from './models/Users';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private route: ActivatedRoute, private userService: UserService) {
      this.user$ = firebaseAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.firebaseAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then( user => console.log("hello")
    );
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
    .switchMap( user => {
      if(user) return this.userService.get(user);

      return Observable.of(null);
    });
  }

}
