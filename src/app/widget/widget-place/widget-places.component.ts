import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'course-widget-places',
  templateUrl: './widget-places.component.html'
})
export class WidgetPlacesComponent {
  @Output()
  public changePlace: EventEmitter<Place> = new EventEmitter<Place>();
  @Input()
  public places: Place[];

  public selectPlace(place: Place): void {
    this.changePlace.emit(place);
  }
}
