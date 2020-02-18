import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/Todo';
import {Store,select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {TodoAdd} from '../action/Todo.action';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store:Store<{todos:Todo[]}>) {
    
   }
AddTodo(todo:string){
  const newtodo= new Todo();
  newtodo.title=todo;
  this.store.dispatch(new TodoAdd(newtodo));
}
  ngOnInit(): void {
  }

}
