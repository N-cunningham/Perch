import { Component, OnInit } from '@angular/core';
import { ColourSwapServiceService } from '../service/colour-swap-service.service';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent implements OnInit {
  colour: String;

  constructor(private colourSwapServiceService: ColourSwapServiceService) { }

  ngOnInit(): void {
  }

  handleClick(colour: String){
    this.colourSwapServiceService.setColour(colour);
  }

}
