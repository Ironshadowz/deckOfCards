import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksComponent } from './decks/decks.component';
import { DrawComponent } from './draw/draw.component';

const routes: Routes =
[
  {path:'', component:DecksComponent},
  {path:'draw/:deckId', component:DrawComponent}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
