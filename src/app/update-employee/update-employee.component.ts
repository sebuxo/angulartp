import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
submitted:boolean;
id:number;
public employee:Employee;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();
this.id = this.route.snapshot.params['id'];
this.employeeService.getEmployee(this.id)
.subscribe(data => {
data[0]["operation"]="modifierPersonne";
data[0]["id"]=this.id;
console.log(data[0]) 
this.employee = data[0];
}, error => console.log(error));
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employee)
.subscribe(data => console.log(data), error => console.log(error));
this.employee = new Employee();
this.gotoList();
  }

  onSubmit(){
    this.updateEmployee();
  }
  gotoList(){
    this.router.navigate(['/employees']);
  }

}
