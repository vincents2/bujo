import { HttpMethod } from './../common/common';
import { EventsService } from './../services/events.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventItem, Scope } from '../common/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit{

  @Output('scopeChanged') scopeChanged = new EventEmitter();
  @Output('spanIdChanged') spanIdChanged = new EventEmitter();

  scope = Scope.Default;
  spanId: string;

  eventItems: EventItem[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    // this.getEventItems();

    this.updateFields();
  }

  changeScope(scope: number) {
    this.scope = scope;
    this.scopeChanged.emit(scope);
  }

  changeSpanId(spanId: string) {
    this.spanId = spanId;
    this.spanIdChanged.emit(spanId);
  }
  
  updateFields() {
    this.eventItems_updatePositions();
  }

  eventItems_updatePositions() {
    if(this.eventItems)
      this.eventItems.forEach(item => {
        
      });
  }

  syncEventItems(data: any[]) {
    switch(data[0]) {
      case HttpMethod.POST: this.postEventItem(data[1]); break;
      case HttpMethod.GET: this.getEventItems(); break;
      case HttpMethod.PUT: this.putEventItem(data[1]); break;
      case HttpMethod.DELETE: this.deleteEventItem(data[1]); break;
    }
  }

  postEventItem(item: EventItem) {
    this.eventItems.push(item);
    this.eventsService.postEventItem(item);
  }
  getEventItems() {
    this.eventItems = this.eventsService.getEventItems();
  }
  putEventItem(item: EventItem) {
    let index = this.eventItems.findIndex(_item => _item.id === item.id);
    this.eventItems[index] = item;
    this.eventsService.putEventItem(item);
  }
  deleteEventItem(item: EventItem) {
    let index = this.eventItems.findIndex(_item => _item.id === item.id);
    this.eventItems.splice(index, 1);
    this.eventsService.deleteEventItem(item);
  }

  debug() { //
    alert(`this.scope = ${this.scope}\n\nthis.spanId = ${this.spanId}\n\nthis.eventItems = ${JSON.stringify(this.eventItems)}`);
  }
}
