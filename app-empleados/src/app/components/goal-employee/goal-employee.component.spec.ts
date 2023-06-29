import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalEmployeeComponent } from './goal-employee.component';

describe('GoalEmployeeComponent', () => {
  let component: GoalEmployeeComponent;
  let fixture: ComponentFixture<GoalEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalEmployeeComponent]
    });
    fixture = TestBed.createComponent(GoalEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
