import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ColourPickerComponent } from '../colour-picker/colour-picker.component';
import { ColourSwapServiceService } from '../service/colour-swap-service.service';
import { Place } from '../model/place'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private colourSwapServiceService: ColourSwapServiceService) { }
  colours: Place[] = [{name: "Sligo", colour: "null"}, {name:"Donegal", colour: "null"},{name:"Mayo", colour: "null"}, {name:"Cavan", colour: "null"}, {name:"Roscommon", colour: "null"}];

  ngOnInit(): void {
  }

  logEvent(constituency: String){

    console.log(constituency)
    let styleTexts = ""
    
    this.colours.forEach(element => {
      if (element.name === constituency){
        element.colour = this.colourSwapServiceService.colour;
      }
      styleTexts = styleTexts + "--" + element.name + ": " + element.colour +"; ";
    });
    
    document.querySelector("body").style.cssText = styleTexts;
  }

}
