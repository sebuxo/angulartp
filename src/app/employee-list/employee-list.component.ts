import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employee:Employee = new Employee();
employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
reloadData(){
  console.log(this.employeeService.getEmployeesList(this.employee));
  this.employee.setOperation("listePersonne");
  this.employees = this.employeeService.getEmployeesList(this.employee);

}
deleteEmployee(id: number) {
  this.employeeService.deleteEmployee(id)
  .subscribe(
  data => {
  console.log(data);
  this.reloadData();
  },
  error => console.log(error));
  }
  employeeDetails(id:number){
    this.router.navigate(['details',id]);
  }
updateEmployee(id:number){
  this.router.navigate(['update',id]);
}
}
