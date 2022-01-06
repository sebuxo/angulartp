import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './employee';
@Injectable({
providedIn: 'root'
})
export class EmployeeService {
// private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

private baseUrl = 'http://localhost/tpangularmysql/gestiPersonne.php';

constructor(private http: HttpClient) { }
getEmployee(id: number): Observable<any> {
return this.http.get(`${this.baseUrl}?operation=getInfoPersonne&personne_id=${id}`);
}
createEmployee(employee: Employee): Observable<Object> {
console.log(employee);
return this.http.post(`${this.baseUrl}`, employee);
}
updateEmployee( employee: Employee): Observable<Object> {
  return this.http.put(`${this.baseUrl}?operation=modifierPersonne`, employee);
  }
  deleteEmployee(id: number): Observable<any> {
  console.log(`${this.baseUrl}?operation=supprimerPersonne/${id}`);
  return this.http.delete(`${this.baseUrl}?operation=supprimerPersonne&personne_id=${id}`, 
  { responseType: 'text' });
  }
  getEmployeesList(employee: Employee): Observable<any> {
  return this.http.get(`${this.baseUrl}?operation=`+employee.operation).pipe(
  map((res:any) => res["data"])
  );
  }
  }