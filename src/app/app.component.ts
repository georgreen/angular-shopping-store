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
      if (user) {
        this.userService.save(user);
        
        let url = localStorage.getItem('returnUrl');
        router.navigateByUrl(url);
      }
      else {
          router.navigateByUrl('/');
      }
    });
  }
}
