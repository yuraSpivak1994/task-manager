import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit {
 constructor(
   private authServise: AuthService,
   private router: Router
 ){}
  ngOnInit(): void {
  if (this.authServise.isloggedin()) {
    this.router.navigate(['/system']);
  }
  }
}
