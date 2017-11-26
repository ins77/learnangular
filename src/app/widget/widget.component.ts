import { Component, OnInit } from '@angular/core';
import { places$ } from '../../data';

@Component({
  selector: 'course-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  public place: Place;
  public places: Place[];

  public ngOnInit(): void {
    places$.subscribe((places: Place[]) => {
      this.places = places;
      this.place = places[0];
    });
  }

  public changePlace(place: Place): void {
    this.place = place;
  }
}
