import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css']
})
export class EmployeeChildComponent {
  @Input() employeeList: Employee[] = [];
  @Input() index: number = 0;

  arrayGoals: string[] = [];

  addGoal(goal: string ) {
    this.arrayGoals.push(goal);
  }

}


