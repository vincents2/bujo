import { HttpClient } from '@angular/common/http';
import { Variables, GoalItem } from './../common/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  
  private path = '/todos';
  private url = Variables.API_SERVER + this.path + '/';

  private fakeData: GoalItem[] = [
    {
      id: 0,
      title: 'Finish Angular Project',
      dateCreated: new Date(2021, 1, 5)
    }
  ];

  constructor(private http: HttpClient) { }

  postGoalItem(item: GoalItem) {
    this.fakeData.push(item);
  }

  getGoalItems() {
    return this.fakeData;
  }

  putGoalItem(item: GoalItem) {
    let index = this.fakeData.findIndex(_item => _item.id === item.id);
    this.fakeData[index] = item;
  }

  deleteGoalItem(item: GoalItem) {
    let index = this.fakeData.findIndex(_item => _item.id === item.id)
    this.fakeData.splice(index, 1);
  }
}
