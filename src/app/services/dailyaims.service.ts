import { HttpClient } from '@angular/common/http';
import { Variables, DailyaimItem } from './../common/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DailyaimsService {
  
  private path = '/dailyaims';
  private url = Variables.API_SERVER + this.path + '/';

  private fakeData: DailyaimItem[] = [
    {
      id: 0,
      title: 'Do sports',
      description: 'Do sports every other day at least 30 minutes.',
      dateCreated: new Date(2021, 1, 1),
      intervalInDays: 2,
      active: true
    },
    {
      id: 1,
      title: 'Eat healthy',
      description: 'Eat at least one apple every day.',
      dateCreated: new Date(2021, 1, 2),
      intervalInDays: 1,
      active: true
    },
    {
      id: 2,
      title: 'Write diary entry',
      description: 'Write one page into the diary.',
      dateCreated: new Date(2021, 1, 2),
      intervalInDays: 1,
      active: true
    }
  ];

  constructor(private http: HttpClient) { }

  postDailyaimItem(item: DailyaimItem) {
    this.fakeData.push(item);
  }

  getDailyaimItems() {
    return this.fakeData;
  }

  putDailyaimItem(item: DailyaimItem) {
    let index = this.fakeData.findIndex(_item => _item.id === item.id);
    this.fakeData[index] = item;
  }

  deleteDailyaimItem(item: DailyaimItem) {
    let index = this.fakeData.findIndex(_item => _item.id === item.id)
    this.fakeData.splice(index, 1);
  }
}
