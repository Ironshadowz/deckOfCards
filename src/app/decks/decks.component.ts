import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CardserviceService } from '../cardservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css']
})
export class DecksComponent
{
  decks:number[] = [1,2,3,4];
  selected:number=1;
  newURL:string=""
  deckId:string=""

  private router = inject(Router)
  private cardServ = inject(CardserviceService)

  @ViewChild('selected')
  select!: ElementRef;

  deckNum():void
  {
    this.selected=this.select.nativeElement.value;
  }

  create()
  {
    console.log("Selected number of decks"+this.selected);
    this.newURL="https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count="+this.selected;
    this.cardServ.getDeck(this.newURL)
        .then
        (
          result=>
          {
            console.log(result['deck_id'])
            this.deckId=result['deck_id']
            this.router.navigate(['/draw', this.deckId])
          }
        )
  }
  create2(num:string)
  {
    //it works
    console.log(num);
    
  }
}
