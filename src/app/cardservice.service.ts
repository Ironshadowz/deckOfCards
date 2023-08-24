import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService
{
  private http = inject(HttpClient)

  constructor() { }

  getDeck(url:string)
  {
    return firstValueFrom(this.http.get<any>(url))
  }
  play(url:string)
  {
    return firstValueFrom(this.http.get<any>(url))
  }
}
