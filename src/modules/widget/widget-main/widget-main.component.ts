import {Component, Input} from '@angular/core';

@Component({
  selector: 'course-widget-main',
  templateUrl: './widget-main.component.html'
})
export class WidgetMainComponent {
  @Input()
  public hotel: HotelInfo;
  @Input()
  public placeTypes: PlaceType;
}
