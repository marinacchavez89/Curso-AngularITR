import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';

@Injectable({
  providedIn: 'root'
}) 
export class EmployeeService {

  constructor(private dialog: MatDialog) { }

  employees: Employee[] = [

    new Employee("Juan", "Diaz", "Developer", 150000),  
    new Employee("Marta", "Rodriguez", "Coach", 220000),
    new Employee("Esteban", "Perez", "Teach Lead", 350000),
    new Employee("Sofia", "Gonzalez", "CEO", 850000)

  ];

  addEmployeebusiness(employee: Employee){
        this.employees.push(employee);
  }

  //Son prácticas:

  muestraMensaje(mensaje: string) {
    const dialogRef = this.dialog.open(EmployeeModalComponent, {
      data: {
        title: 'Detalle del empleado',
        message: mensaje
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Ventana emergente cerrada');
    });
  }
}
