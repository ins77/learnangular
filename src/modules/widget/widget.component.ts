import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { places$, placeTypes$ } from '../../data';

@Component({
  selector: 'course-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  public places: Place[];
  public placeTypes$: Observable<PlaceTypes[]>;

  public ngOnInit(): void {
    places$.subscribe((places: Place[]) => {
      this.places = places;
    });
    this.placeTypes$ = placeTypes$;
  }

  public changePlace(typeTitle: string): void {
    places$.subscribe((places: Place[]) => {
      this.places = places.filter((place: Place) => {
        return place.place_type.toLowerCase() === typeTitle.toLowerCase();
      });
    });
  }
}
