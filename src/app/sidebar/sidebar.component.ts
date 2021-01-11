import { Component, Input, OnInit } from '@angular/core';
import { DailyaimItem, GoalItem, HttpMethod, Scope, TodoItem } from '../common/common';
import { TodosService } from '../services/todos.service';
import { GoalsService } from '../services/goals.service';
import { DailyaimsService } from '../services/dailyaims.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Input('scope') scope = Scope.Default;
  @Input('spanId') spanId: string;

  selection = 3;

  todoItems: TodoItem[] = [];
  goalItems: GoalItem[] = [];
  dailyaimItems: DailyaimItem[] = [];

  constructor(
    private todosService: TodosService,
    private goalsService: GoalsService,
    private dailyaimsService: DailyaimsService
  ) { }

  ngOnInit(): void {
    this.getTodoItems();
    this.getGoalItems();
    this.getDailyaimItems();

    this.updateFields();
  }

  updateFields() {
    this.todoItems_updateGoalTitles();
  }

  todoItems_updateGoalTitles() {
    if(this.todoItems && this.goalItems)
      this.todoItems.forEach(item => {
        if(item.goalId != undefined) {
          let index = this.goalItems.findIndex(_item => _item.id === item.goalId);
          item.goalTitle = this.goalItems[index].title;
        }
      });
  }

  syncTodoItem(data: any[]) {
    switch(data[0]) {
      case HttpMethod.POST: this.postTodoItem(data[1]); break;
      case HttpMethod.GET: this.getTodoItems(); break;
      case HttpMethod.PUT: this.putTodoItem(data[1]); break;
      case HttpMethod.DELETE: this.deleteTodoItem(data[1]); break;
    }
  }
  syncGoalItem(data: any[]) {
    switch(data[0]) {
      case HttpMethod.POST: this.postGoalItem(data[1]); break;
      case HttpMethod.GET: this.getGoalItems(); break;
      case HttpMethod.PUT: this.putGoalItem(data[1]); break;
      case HttpMethod.DELETE: this.deleteGoalItem(data[1]); break;
    }
  }
  syncDailyaimItem(data: any[]) {
    switch(data[0]) {
      case HttpMethod.POST: this.postDailyaimItem(data[1]); break;
      case HttpMethod.GET: this.getDailyaimItems(); break;
      case HttpMethod.PUT: this.putDailyaimItem(data[1]); break;
      case HttpMethod.DELETE: this.deleteDailyaimItem(data[1]); break;
    }
  }

  postTodoItem(item: TodoItem) {
    this.todoItems.push(item);
    this.todosService.postTodoItem(item);
  }
  getTodoItems() {
    this.todoItems = this.todosService.getTodoItems();
  }
  putTodoItem(item: TodoItem) {
    let index = this.todoItems.findIndex(_item => _item.id === item.id);
    this.todoItems[index] = item;
    this.todosService.putTodoItem(item);
  }
  deleteTodoItem(item: TodoItem) {
    let index = this.todoItems.findIndex(_item => _item.id === item.id);
    this.todoItems.splice(index, 1);
    this.todosService.deleteTodoItem(item);
  }
  
  postGoalItem(item: GoalItem) {
    this.goalItems.push(item);
    this.goalsService.postGoalItem(item);
  }
  getGoalItems() {
    this.goalItems = this.goalsService.getGoalItems();
  }
  putGoalItem(item: GoalItem) {
    let index = this.goalItems.findIndex(_item => _item.id === item.id);
    this.goalItems[index] = item;
    this.goalsService.putGoalItem(item);
  }
  deleteGoalItem(item: GoalItem) {
    let index = this.goalItems.findIndex(_item => _item.id === item.id);
    this.todoItems.splice(index, 1);
    this.goalsService.deleteGoalItem(item);
  }
  
  postDailyaimItem(item: DailyaimItem) {
    this.dailyaimItems.push(item);
    this.dailyaimsService.postDailyaimItem(item);
  }
  getDailyaimItems() {
    this.dailyaimItems = this.dailyaimsService.getDailyaimItems();
  }
  putDailyaimItem(item: DailyaimItem) {
    let index = this.dailyaimItems.findIndex(_item => _item.id === item.id);
    this.dailyaimItems[index] = item;
    this.dailyaimsService.putDailyaimItem(item);
  }
  deleteDailyaimItem(item: DailyaimItem) {
    let index = this.dailyaimItems.findIndex(_item => _item.id === item.id);
    this.dailyaimItems.splice(index, 1);
    this.dailyaimsService.deleteDailyaimItem(item);
  }

  debug() { //
    alert(`this.scope = ${this.scope}\n\nthis.spanId = ${this.spanId}\n\nthis.todoItems = ${JSON.stringify(this.todoItems)}\n\nthis.goalItems = ${JSON.stringify(this.goalItems)}\n\nthis.dailyaimItems = ${JSON.stringify(this.dailyaimItems)}`);
  }
}
