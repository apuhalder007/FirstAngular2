import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoComponent2 } from './todo/todo.component2';
import { TodoDetailComponent } from './todo/todo.detail.component';
import { FormComponent } from "./form.component";
import {MessageDirective} from "./message.directive";
import { appRouterModule } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoComponent2,
    TodoDetailComponent,
    FormComponent,
    MessageDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
