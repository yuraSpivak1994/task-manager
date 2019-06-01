import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html'
})
export class SystemComponent implements OnInit {
  constructor(
    public authServise: AuthService,
    private router: Router
  ) {}
  user: User;
  logOut() {
    this.authServise.logOut();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    if ( !this.authServise.isloggedin())  {
      this.router.navigate(['/login']);
    }
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
}
