import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoallistComponent } from './goallist.component';

describe('GoallistComponent', () => {
  let component: GoallistComponent;
  let fixture: ComponentFixture<GoallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoallistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
