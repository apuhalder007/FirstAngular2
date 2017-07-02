import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { TodoService2 } from '../todo.service2';
@Component({
  selector : 'todo-detail',
  templateUrl : './todo.detail.component.html',
  providers: [TodoService2]
})

export class TodoDetailComponent implements OnInit{
  private sub;
  private todo = {};
  constructor(
    private todoService : TodoService2,
    private route : ActivatedRoute
  ){}
  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
     let todoId = Number.parseInt(params['todoId']);
     this.todoService.getTodoDetail(todoId)
     .subscribe(
       response =>{
         this.todo = response;
         console.log(response);
       },
       error => console.log()
     );

    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
