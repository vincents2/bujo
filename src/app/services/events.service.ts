import { HttpClient } from '@angular/common/http';
import { Variables, EventItem } from './../common/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  private path = '/todos';
  private url = Variables.API_SERVER + this.path + '/';

  private fakeData: EventItem[] = [
    {
      id: 0,
      title: 'Event 1',
      dateCreated: new Date(2021, 1, 3),
      startDate: new Date(2021, 1, 22, 10, 0),
      endDate: new Date(2021, 1, 22, 19, 0)
    },
    {
      id: 1,
      title: 'Event 2',
      dateCreated: new Date(2021, 1, 4),
      startDate: new Date(2021, 1, 22, 10, 10),
      endDate: new Date(2021, 1, 22, 10, 15)
    },
    {
      id: 2,
      title: 'Event 3',
      dateCreated: new Date(2020, 12, 31),
      startDate: new Date(2021, 1, 22, 20, 0),
      endDate: new Date(2021, 1, 22, 20, 45)
    },
    {
      id: 3,
      title: 'Event 4',
      description: 'description...',
      dateCreated: new Date(2021, 1, 2),
      startDate: new Date(2021, 1, 22, 8, 0),
      endDate: new Date(2021, 1, 22, 9, 0)
    },
    {
      id: 4,
      title: 'Event 5',
      dateCreated: new Date(2020, 12, 31),
      startDate: new Date(2021, 1, 22, 13, 30),
      endDate: new Date(2021, 1, 22, 14, 15)
    },
    {
      id: 5,
      title: 'Event 6',
      dateCreated: new Date(2020, 12, 31),
      startDate: new Date(2021, 1, 22, 21, 0),
      endDate: new Date(2021, 1, 22, 21, 15)
    }
  ];

  constructor(private http: HttpClient) { }

  postEventItem(item: EventItem) {
    this.fakeData.push(item);
  }

  getEventItems() {
    return this.fakeData;
  }

  putEventItem(item: EventItem) {
    let index = this.fakeData.findIndex(_item => _item.id === item.id);
    this.fakeData[index] = item;
  }

  deleteEventItem(item: EventItem) {
    let index = this.fakeData.findIndex(_item => _item.id === item.id)
    this.fakeData.splice(index, 1);
  }
}
