import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ColourPickerComponent } from '../colour-picker/colour-picker.component';
import { ColourSwapServiceService } from '../service/colour-swap-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private colourSwapServiceService: ColourSwapServiceService) { }

  ngOnInit(): void {
  }

  logEvent(constituency: String){
    console.log(constituency)
    let styleText = "--" + constituency + ": " + this.colourSwapServiceService.colour +";";
    document.querySelector("body").style.cssText = styleText;
  }

}
