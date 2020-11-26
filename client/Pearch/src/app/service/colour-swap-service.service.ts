import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColourSwapServiceService {
  colour: String;

  constructor() { }

  setColour(colour: String){
    this.colour = colour;
  }
}
