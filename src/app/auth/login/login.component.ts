import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private  userservice: UsersService,
    private authServese: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.message = new Message('danger', '')
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
  onSubmit() {
    const formData = this.form.value
    this.userservice.getUserByEmail(formData.email)
      .subscribe((user: User) => {
       if (user) {
         if (formData.password === user.password) {
           this.message.text = '';
           window.localStorage.setItem('user', JSON.stringify(user));
           this.authServese.login();
           this.router.navigate(['/system/tasks']);
         } else {
          this.showMessage('wrong password');
         }
       } else {
         this.showMessage('\n' +
           'does not have that user');
       }
    });
  }

}
