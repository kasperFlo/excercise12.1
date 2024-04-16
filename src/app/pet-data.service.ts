import { Injectable } from '@angular/core';
import {Pet} from "./Pet";
import {PetJson} from "./PetJson";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor(private http: HttpClient) {
  }

  private static imageFolder: string = 'http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/images/';

  private static json2Employee(petJson : PetJson) : Pet {
    const pet: Pet = new Pet();
    pet.id = petJson.id;

    pet.ownerFirstName = petJson.owner.firstName;
    pet.ownerLastName = petJson.owner.lastName;

    pet.petName = petJson.name;
    pet.petKind = petJson.breed;

    pet.breed = petJson.petKind;
    pet.picture = this.imageFolder + petJson.picture;

    return pet;
  }

  public getPetByUrl(url: string): Observable<Pet | undefined> {
    return this.http.get<PetJson>(url).pipe(
      map(pet => {
        return PetDataService.json2Employee(pet);
      })
    );
  }

}
