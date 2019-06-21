import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SystemService } from '../../shared/services/system.servise';
import { Tasks} from '../../shared/models/task.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit, OnDestroy {
  task = [];
  id: number;
  subscription: any;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private systemService: SystemService,
    private router: Router
  ) { }

  private fetchTaskById(id) {
    this.systemService.getTaskById(id)
      .subscribe((task: Tasks) => {
       this.task.push(task);
      }, err => {
        console.log(err);
      });
  }

  private update() {
    const {email, title, description} = this.form.value;
    const task = new Tasks(email, title, description);
    this.systemService.updateTask(this.id, task)
     .subscribe(( ) => {
       this.router.navigate(['system/tasks']);
     });
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = +params.id;
      this.fetchTaskById(id);
      return this.id = id;
    });

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'title': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'description': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    console.log(this.form);
    this.update();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
