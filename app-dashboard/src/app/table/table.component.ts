import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

export interface Employee {
  dni: string;
  name: string;
  lastName: string;
  shortGoal: string;
  longGoal: string;
}


const EMPLOYEE_DATA: Employee[] = [
  {dni: '34809874', name: 'Marina', lastName: 'Chávez', shortGoal: 'Deseo ser Junior.', longGoal: 'Deseo ser Sr.'}
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['Dni', 'Nombre', 'Apellido', 'Objetivo C/P', 'Objetivo L/P'];
  dataSource = EMPLOYEE_DATA;
}
