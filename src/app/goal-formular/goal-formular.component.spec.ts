import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFormularComponent } from './goal-formular.component';

describe('GoalFormularComponent', () => {
  let component: GoalFormularComponent;
  let fixture: ComponentFixture<GoalFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
