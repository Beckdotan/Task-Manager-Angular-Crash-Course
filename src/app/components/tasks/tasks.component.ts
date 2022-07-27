import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    
  }
  
  deleteTask(task: Task){
    this.taskService
    //delete from server 
    .deleteTask(task)
    //when done delete from ui becouse the ui will be updated only when the page will be refreshed. 
    .subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id))
  }

  toggleReminder(task: Task){
    //UI
    task.reminder = !task.reminder;
    //Server
    this.taskService.UpdateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskService
    //serverside
    .addTask(task).
    //UI
    subscribe((task)=> this.tasks.push(task));
  }


}
