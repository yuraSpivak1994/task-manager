import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../shared/services/system.servise';
import { Tasks } from '../../shared/models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: Tasks;
  constructor(private systemService: SystemService) { }

  ngOnInit() {
    this.getTask();
  }

  private getTask() {
    this.systemService.fetchTasks()
      .subscribe((task: Tasks) => {
        this.tasks = task;
      });
  }
  private deleteTask(id) {
   this.systemService.delete(id)
     .subscribe(() => {
       this.getTask();
     });
}
}
