import { Component, OnInit } from '@angular/core';
import {MessageDirective} from "../message.directive";
import { TodoService2 } from '../todo.service2';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo.component2.html',
  styleUrls: ['./todo.component2.css'],
  providers: [TodoService2]
})

export class TodoComponent2{
  public appTitle = 'Todo List';
  public todoText : string = '';
  public todos;
  public todoPos;
  public btnToggle :boolean = true;

  constructor(private todoService2 : TodoService2){

  }

   ngOnInit() {
     this.showTodos();
   }
   showTodos(){
     this.todoService2.getTodos()
                      .subscribe(response => this.todos = response);
   }

   addTodo(){
     this.todoService2.setTodo(this.todoText)
     .subscribe(
       response => this.showTodos(),
       error => console.error(error)
     );
   }

   editTodo(todo){
     this.btnToggle = false;
     //this.todoPos = this.todos.indexOf(todo);
     this.todoPos = todo.id;
     this.todoText = todo.text;
   }

   doEditTodo(){
       this.todoService2.editTodo(this.todoPos, this.todoText)
       .subscribe(
         response =>this.showTodos(),
         error =>alert(error)
       );
       ;
       this.btnToggle = true;
       this.todoText = '';
   }

   deleteTodo(todo){
     let con = confirm('Are you sure want to delete ?');
     if(con){
     this.todoService2.deleteTodo(todo)
     .subscribe(
       response => this.showTodos(),
       error => alert(error)
     );
     }
   }
}
