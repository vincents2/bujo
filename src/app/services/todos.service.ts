import { HttpClient } from '@angular/common/http';
import { Variables, TodoItem, Scope } from './../common/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  
  private path = '/todos';
  private url = Variables.API_SERVER + this.path + '/';

  private fakeData: TodoItem[] = [
    {
      id: 1,
      title: 'Take out garbage',
      dateCreated: new Date(2021, 1, 4),
      spanId: new Date(2021, 1, 11).toISOString(),
      scope: Scope.Week,
      done: true
    },
    {
      id: 2,
      title: 'implement WeekviewComponent',
      dateCreated: new Date(2020, 12, 31),
      spanId: new Date(2021, 1, 11).toISOString(),
      scope: Scope.Week,
      goalId: 0,
      goalTitle: 'test',
      done: false
    },
    {
      id: 3,
      title: 'Make doctor appointment',
      description: 'Phone number: +49 185 123 5621',
      dateCreated: new Date(2021, 1, 2),
      spanId: new Date(2021, 1, 11).toISOString(),
      scope: Scope.Week,
      done: false
    },
    {
      id: 4,
      title: 'Make Backend',
      dateCreated: new Date(2020, 12, 31),
      spanId: new Date(2021, 1, 11).toISOString(),
      scope: Scope.Week,
      goalId: 0,
      done: false
    },
    {
      id: 5,
      title: 'Make Database',
      dateCreated: new Date(2020, 12, 31),
      spanId: new Date(2021, 1, 11).toISOString(),
      scope: Scope.Week,
      goalId: 0,
      done: false
    }
  ];

  constructor(private http: HttpClient) { }

  postTodoItem(item: TodoItem) {
    this.fakeData.push(item);
  }

  getTodoItems() {
    return this.fakeData;
  }

  putTodoItem(item: TodoItem) {
    let index = this.fakeData.findIndex(_item => _item.id === item.id);
    this.fakeData[index] = item;
  }

  deleteTodoItem(item: TodoItem) {
    let index = this.fakeData.findIndex(_item => _item.id === item.id)
    this.fakeData.splice(index, 1);
  }
}
