import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardserviceService } from '../cardservice.service';
import { Cards } from '../cards';

@Component
({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent
{
  @ViewChild('selected')
  select!: ElementRef;
  private activateRoute = inject(ActivatedRoute)
  private cardServ = inject(CardserviceService)

  deckID:string=''
  newUrl:string=''
  cardsRemaining!:number;
  cardsToDraw:number=1;
  draws:number[] = [1,2,3,4];
  cardsDrawn : Cards[]=[]
  cards:string[]=[];

  ngOnInit()
  {
    this.deckID=this.activateRoute.snapshot.params['deckId'];
    this.newUrl="https://www.deckofcardsapi.com/api/deck/"+this.deckID+"/draw/?count=0"
    this.cardServ.play(this.newUrl)
      .then
      (
        result=>
        {
          console.log(result['remaining']);
          this.cardsRemaining=result['remaining'];
        }
      )
  }
  drawNum()
  {
    this.cardsToDraw=this.select.nativeElement.value;
    console.log(this.cardsToDraw);
    console.log(this.select)
  }
  drawCard()
  {
    this.newUrl="https://www.deckofcardsapi.com/api/deck/"+this.deckID+"/draw/?count="+this.cardsToDraw;
    console.log(this.newUrl);
    this.cardServ.play(this.newUrl)
      .then
      (
        result=>
        {
          this.cardsDrawn=result['cards'];
          console.log(this.cardsDrawn);
          this.cards=this.cardsDrawn.map(i=>i.image);
          console.log(this.cards);
          this.cardsRemaining=result['remaining'];
        }
      )
  }

}
