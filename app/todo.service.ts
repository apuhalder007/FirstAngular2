import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  public todos = [
    {text:"This is the first task"},
    {text:"This is the second task"},
    {text:"This is the third task"}
  ];
  constructor() { }

  public getTodos(){
    return this.todos;
  }

  public setTodo(todo){
    this.todos.push(todo);
  }

  public editTodo(todoPos, todoText){
    this.todos[todoPos].text = todoText;
  }

  public deleteTodo(todo){
    let todoPos = this.todos.indexOf(todo);
    this.todos.splice(todoPos, 1);
  }


}
