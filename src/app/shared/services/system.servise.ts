import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../models/task.model';

@Injectable()
export class SystemService {
  constructor(private http: HttpClient) {}

  fetchTasks() {
    return this.http.get(`http://localhost:3000/tasks`)
      .map((response) => response);
  }
  getTaskById(id: number) {
    return this.http.get(`http://localhost:3000/tasks?id=${id}`)
      .map((response: Response) => response)
      .map((user) => user[0] ? user[0] : undefined);
  }
  getTaskByEmail(email: string) {
    return this.http.get(`http://localhost:3000/tasks?email=${email}`)
      .map((response: Response) => response)
      .map((user) => user[0] ? user[0] : undefined);
  }
  createNewTask(task: Tasks) {
    return this.http.post(`http://localhost:3000/tasks`, task)
      .map((response: Response) => response);
  }
  updateTask(id: number, task: Tasks) {
    return this.http.put(`http://localhost:3000/tasks/${id}`, task);
  }
  delete(id: number) {
    return this.http.delete(`http://localhost:3000/tasks/${id}`);
  }
}
