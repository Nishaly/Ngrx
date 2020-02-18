import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import {TodoAdd}from '../../action/Todo.action';
import {Todo} from '../models/Todo';
import {Store,select} from '@ngrx/store';
import { TodoRemove } from '../action/Todo.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  todos:Todo[];

  constructor(private store:Store<{todos:Todo[]}>) {
    store.pipe(select('todos')).subscribe((values)=>this.todos=values);
   }
Remove(value:number){
 this.store.dispatch(new TodoRemove(value));
}
  ngOnInit(): void {

  }

}

