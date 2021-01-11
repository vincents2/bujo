import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearviewComponent } from './yearview.component';

describe('YearviewComponent', () => {
  let component: YearviewComponent;
  let fixture: ComponentFixture<YearviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
