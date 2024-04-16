import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetDetailsComponent} from "./pet-details/pet-details.component";

const routes: Routes = [
  {path: '', component: PetDetailsComponent},
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
