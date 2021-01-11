import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyaimlistComponent } from './dailyaimlist.component';

describe('DailyaimlistComponent', () => {
  let component: DailyaimlistComponent;
  let fixture: ComponentFixture<DailyaimlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyaimlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyaimlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
