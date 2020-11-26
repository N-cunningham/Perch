import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map/map.component';
import { ColourPickerComponent } from './colour-picker/colour-picker.component';
import { ColourSwapServiceService } from './service/colour-swap-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ColourPickerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [MapComponent, ColourPickerComponent, ColourSwapServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
