import { Injectable } from '@angular/core';
import {Employee} from "./employee";
import {EmployeeJson} from "./EmployeeJson";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) {
  }

  private static imageFolder: string = 'http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/images/';

  private static json2Employee(employeeJson : EmployeeJson) : Employee {
    const employee: Employee = new Employee();
    employee.firstName = employeeJson.firstName;
    employee.lastName = employeeJson.lastName;
    employee.position = employeeJson.position;
    employee.school = employeeJson.school;

    employee.phoneNumber = employeeJson.contacts.phone;
    employee.emailAddress = employeeJson.contacts.email;

    employee.witch = employeeJson.witch;
    employee.salary = employeeJson.salary;
    employee.picture = this.imageFolder + employeeJson.picture;

    return employee;
  }

  public getEmployeeByUrl(url: string): Observable<Employee | undefined> {
    return this.http.get<EmployeeJson>(url).pipe(
      map(employee => {
        return EmployeeDataService.json2Employee(employee);
      })
    );
  }

}
