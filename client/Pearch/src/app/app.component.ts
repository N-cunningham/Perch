import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pearch';
  titles = ["test4","test3","test2","test1","test"];
  bodies = ["Oireachtas role in Séamus Woulfe debacle ‘very open question’, says TD", "ur da sells avon", "Over 10 million people dead as of 1968", "smoke grass and eat ass", "Tha rain in Spain falls mainly on the plain"]
  pictures = ["https://www.irishtimes.com/polopoly_fs/1.4409796!/image/image.jpg_gen/derivatives/landscape_620/image.jpg", "https://www.irishtimes.com/polopoly_fs/1.4409862.1605457367!/image/image.jpg_gen/derivatives/box_620_330/image.jpg", "https://www.irishtimes.com/polopoly_fs/1.4408814!/image/image.jpg_gen/derivatives/landscape_620/image.jpg", "https://www.irishtimes.com/polopoly_fs/1.4409839.1605451740!/image/image.jpg_gen/derivatives/box_620_330/image.jpg", "https://www.irishtimes.com/polopoly_fs/1.4409709.1605378479!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"]
  content = {titles: this.titles, pics: this.pictures}
}
