import { Component, Input } from '@angular/core';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'course-widget-places',
  templateUrl: './widget-places.component.html'
})
export class WidgetPlacesComponent {
  @Input()
  public places: Place[];

  public constructor(private widgetService: WidgetService) {}

  public selectPlace(place: Place): void {
    this.widgetService.place$.next(place);
  }
}
