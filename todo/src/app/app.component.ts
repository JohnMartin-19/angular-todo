import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[NO_ERRORS_SCHEMA]
})

export class AppComponent {
  private list = new TodoList('John',[
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Buy groceries'),
  ])
  get username(): string{
    return this.list.user;
  }
  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length
  }

  title = 'Mburuu';
}
