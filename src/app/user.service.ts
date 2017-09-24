import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

import { AppUser } from './models/Users';

@Injectable()
export class UserService {

  constructor(private database: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.database.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(user: firebase.User): FirebaseObjectObservable<AppUser> {
    return this.database.object('/users/' + user.uid);
  }
}
