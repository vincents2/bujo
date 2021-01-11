import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbarComponent } from './eventbar.component';

describe('EventbarComponent', () => {
  let component: EventbarComponent;
  let fixture: ComponentFixture<EventbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
