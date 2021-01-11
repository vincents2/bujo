import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpMethod, Scope, TodoItem } from '../common/common';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit {

  @Input('scope') scope: Scope = Scope.Default;
  @Input('spanId') spanId: string = new Date(2021, 1, 4).toDateString();
  @Input('todoItems') todoItems: TodoItem[] = [];

  @Output('requireSync') requireSync = new EventEmitter();

  nextTempId = 0;

  constructor() { }

  ngOnInit(): void {
  }

  itemClicked(item: TodoItem) {
    // modify form
  }

  addItemClicked() {
    this.todoItems.push({
      tempId: this.nextTempId,
      title: 'new test item',
      dateCreated: new Date(),
      spanId: this.spanId,
      scope: this.scope,
      done: false
    });
    this.nextTempId++;
  }

  toggleDone(item: TodoItem) {
    item.done = !item.done;
    this.requireSync.emit([HttpMethod.PUT, item]);
  }

  debug() { //
    alert(`this.scope = ${this.scope}\n\nthis.spanId = ${this.spanId}\n\nthis.todoItems = ${JSON.stringify(this.todoItems)}`);
  }
}
