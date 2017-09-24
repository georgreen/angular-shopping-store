import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';
import { AppUser } from '../models/Users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    appUser: AppUser;

  constructor(public authService: AuthService) {
      this.authService.appUser$.subscribe(user => this.appUser = user);
  }

  logout() {
    this.authService.logout()
  }

}
