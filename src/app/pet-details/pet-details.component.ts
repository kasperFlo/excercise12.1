import {Component, OnDestroy} from '@angular/core';
import {Pet} from "../Pet";
import {Observable, Subject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PetDataService} from "../pet-data.service";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})

export class PetDetailsComponent implements OnDestroy{

  pet : Pet | undefined;
  petSub : Subscription | undefined;

  givenURL = "http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data/p20082.json"

  constructor(petDataService : PetDataService) {

    this.petSub = petDataService.getPetByUrl(this.givenURL)
      .subscribe(pet => this.pet = pet);
  }

  ngOnDestroy() {
    this.petSub?.unsubscribe();
  }

}
