export class Employee {
    name: string;
    lastName: string;
    role: string;
    salary: number;
    goals: string[];
  
    constructor(name: string, lastName: string, role: string, salary: number) {
      this.name = name;
      this.lastName = lastName;
      this.role = role;
      this.salary = salary;
      this.goals = [];
    }
  }

