import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Store, StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoReducer} from './reducer/Todo.reducer';
import { ReadComponent } from './read/read.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos:TodoReducer}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
