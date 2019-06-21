import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SystemComponent } from './system.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DropdownDirective } from '../shared/directives/dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [TasksComponent, CreateTaskComponent, SystemComponent, UpdateTaskComponent, DropdownDirective]
})
export class SystemModule {

}
