import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit  {
  title = 'Listado de empleados';

  constructor(private miServicio: EmployeeService, private router:Router){
    this.employees=this.miServicio.employees;
  }
  ngOnInit(): void {
    this.employees=this.miServicio.employees;
  }

  employees: Employee[] = [];

  addEmployee(){
    if (this.txtName && this.txtLastName && this.txtRole && this.txtSalary) {
      let myEmployee = new Employee(this.txtName, this.txtLastName, this.txtRole, this.txtSalary);
      this.miServicio.muestraMensaje("Apellido y Nombre: " + myEmployee.lastName + ", " + myEmployee.name + "<br>Rol: " + myEmployee.role + "<br>Salario: $ " + myEmployee.salary);
      this.miServicio.addEmployeebusiness(myEmployee);
  
      
      this.txtName = "";
      this.txtLastName = "";
      this.txtRole = "";
      this.txtSalary = 0;
    } else {      
      this.router.navigate(['/**']);
    }
  }

  goHome(){
    this.router.navigate(['']);
  }

  txtName: string="";
  txtLastName: string="";
  txtRole: string="";
  txtSalary: number=0;
}
