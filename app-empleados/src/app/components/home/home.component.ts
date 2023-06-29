import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Listado de empleados';

  constructor(private miServicio: EmployeeService){
    this.employees=this.miServicio.employees;
  }
  ngOnInit(): void {
    this.employees=this.miServicio.employees;
  }

  employees: Employee[] = []; 

}
