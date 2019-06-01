import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../shared/services/system.servise';
import { Tasks } from '../../shared/models/task.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  form: FormGroup;
  constructor(
    private systemService: SystemService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  private onSubmit() {
    const {email, title, description} = this.form.value;
    const task = new Tasks(email, title, description);
    this.systemService.createNewTask(task)
      .subscribe(() => {
        this.router.navigate(['/tasks']);
      });
  }
}
