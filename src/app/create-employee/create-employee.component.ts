import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee: Employee= new Employee()
submitted=false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  gotoList(){
    this.router.navigate(['/employees']);
  }

  save(){
    this.employee.setOperation("ajouterPersonne");
    this.employeeService.createEmployee(this.employee).subscribe(data=>console.log(data),error=>console.log(error));
 this.employee=new Employee();
 this.gotoList(); 
}

onSubmit(){
  this.submitted=true;
  this.save();
}

}