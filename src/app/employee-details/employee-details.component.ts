import {Component, OnDestroy} from '@angular/core';
import {Employee} from "../employee";
import {Observable, Subject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EmployeeDataService} from "../employee-data.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnDestroy{

  employee : Employee | undefined;
  employeeSub : Subscription | undefined;

  givenURL = "http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data/mcgonagall.json"

  constructor(employeeDataService : EmployeeDataService) {

    this.employeeSub = employeeDataService.getEmployeeByUrl(this.givenURL)
      .subscribe(employee => this.employee = employee);
  }

  ngOnDestroy() {
    this.employeeSub?.unsubscribe();
  }



}
