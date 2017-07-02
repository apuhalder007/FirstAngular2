import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
 public todoText : string = '';
 public todos;
 public todoPos;
 public btnToggle :boolean = true;
  constructor(private todoService: TodoService){}
  ngOnInit() {
    this.showTodos();
  }
  showTodos(){
    this.todos = this.todoService.getTodos();
  }

  addTodo(){
    this.todoService.setTodo(this.todoText);
  }

  editTodo(todo){
    this.btnToggle = false;
    this.todoPos = this.todos.indexOf(todo);
    this.todoText = todo.text;
  }

  doEditTodo(){
      this.todoService.editTodo(this.todoPos, this.todoText);
      this.btnToggle = true;
      this.todoText = '';
  }

  deleteTodo(todo){
    let con = confirm('Are you sure want to delete ?');
    if(con){
    this.todoService.deleteTodo(todo);
    }
  }


}
