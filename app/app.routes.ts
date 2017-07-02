import {Routes, RouterModule} from  '@angular/router';
import { TodoComponent2 } from './todo/todo.component2';
import { TodoDetailComponent } from './todo/todo.detail.component';
import {FormComponent} from './form.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'todos',
    component: TodoComponent2,
  },
  {
    path: 'todo/:todoId',
    component: TodoDetailComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },

  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
