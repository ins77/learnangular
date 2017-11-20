import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'course-widget-main',
  templateUrl: './widget-main.component.html'
})
export class WidgetMainComponent {
  @Output()
  public changePlace: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  public hotel: HotelInfo;
  @Input()
  public placeTypes: PlaceType[];

  public changePlaceType(typeTitle: string): void {
    this.changePlace.emit(typeTitle);
  }
}
