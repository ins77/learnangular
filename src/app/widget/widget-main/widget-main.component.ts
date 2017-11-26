import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { placeTypes$ } from '../../../data';

@Component({
  selector: 'course-widget-main',
  templateUrl: './widget-main.component.html'
})
export class WidgetMainComponent implements OnInit {
  @Output()
  public setPlace: EventEmitter<Place> = new EventEmitter<Place>();
  @Input()
  public places: Place[];

  public placeTypes$: Observable<PlaceType[]>;
  public placeType: string;
  public place: Place;

  public ngOnInit(): void {
    this.placeType = this.places[0].type;
    this.place = this.places[0];
    this.placeTypes$ = placeTypes$;
  }

  public changePlace(place: Place): void {
    this.place = place;
    this.setPlace.emit(place);
  }

  public changeType(type: string): void {
    this.placeType = type;
    this.place = this.places.filter((place: Place) => {
      return place.type === type;
    })[0];
    this.setPlace.emit(this.place);
  }
}
