import {Component, OnDestroy} from '@angular/core';
import {Pet} from "../Pet";
import {Observable, Subject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PetDataService} from "../pet-data.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})

export class EmployeeDetailsComponent implements OnDestroy{

  pet : Pet | undefined;
  petSub : Subscription | undefined;

  givenURL = "http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data/p20082.json"

  constructor(employeeDataService : PetDataService) {

    this.petSub = employeeDataService.getPetByUrl(this.givenURL)
      .subscribe(employee => this.pet = employee);
  }

  ngOnDestroy() {
    this.petSub?.unsubscribe();
  }

}
