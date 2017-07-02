import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TodoService2 {
  public todos = [];
  constructor(private http: Http) {
    //this.headers.append('Content-Type','application/x-www-form-urlencoded');
  }

  public getTodos(){
    return this.http.get('http://localhost/api/select.php')
    .map((response:Response) => response.json());
  }

  public setTodo(todoText){
    let bodyString = JSON.stringify({text: todoText}); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //let options       = new RequestOptions({ headers: headers }); // Create a request option

    if(todoText !=''){
    return this.http.post('http://localhost/api/insert.php',bodyString)
    .map((response) => response);
    }
  }

  public editTodo(todoPos, todoText){
    let bodyString = JSON.stringify({id: todoPos, text: todoText}); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    //console.log(bodyString);
    return this.http.post('http://localhost/api/update.php',bodyString,options)
    .map(() => '');
  }

  public deleteTodo(todo){
    let bodyString = JSON.stringify({id: todo.id}); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    //console.log(bodyString);
    return this.http.post('http://localhost/api/delete.php',bodyString,options)
    .map(() => '');
  }

  public getTodoDetail(todoId){
    let bodyString = JSON.stringify({id: todoId}); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    //console.log(bodyString);
    return this.http.post('http://localhost/api/detail.php',bodyString)
    .map(response => response.json());
  }


}
