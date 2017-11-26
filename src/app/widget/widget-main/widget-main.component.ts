import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'course-widget-main',
  templateUrl: './widget-main.component.html'
})
export class WidgetMainComponent implements OnInit {
  @Input()
  public places: Place[];

  public placeTypes$: Observable<PlaceType[]>;
  public placeType: string;
  public placePhoto: string;

  private place: Place;

  public constructor(private widgetService: WidgetService) {}

  public ngOnInit(): void {
    this.placeTypes$ = this.widgetService.getPlaceTypes();
    this.widgetService.place$
      .subscribe((place: Place) => {
        this.placePhoto = place.photos[0].img;
      });
  }

  public changePlaceType(type: string): void {
    this.placeType = type;
    this.place = this.places.filter((place: Place) => {
      return place.type === type;
    })[0];
    this.widgetService.place$.next(this.place);
  }
}
