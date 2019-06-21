import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  {path: '', component: SystemComponent, children: [
      {path: 'tasks', component: TasksComponent},
      {path: 'task', component: CreateTaskComponent},
      {path: 'update/:id', component: UpdateTaskComponent}
      ]}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class SystemRoutingModule {}
