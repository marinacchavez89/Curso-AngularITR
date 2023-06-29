import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-goal-employee',
  templateUrl: './goal-employee.component.html',
  styleUrls: ['./goal-employee.component.css']
})
export class GoalEmployeeComponent implements OnInit {
  @Output() goalEmployee = new EventEmitter<string>();  

  constructor() { };

  ngOnInit(): void{    
  }

  addGoal(newGoal: string) {
    this.goalEmployee.emit(newGoal);
  }
}
