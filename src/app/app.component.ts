import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private auth: AuthService, private userService: UserService) {
    auth.user$.subscribe( user => {
      if (!user) {
        return;
      }
      this.userService.save(user);
      const url = localStorage.getItem('returnUrl');

      if (url) {
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(url);
      }

    });
  }
}
