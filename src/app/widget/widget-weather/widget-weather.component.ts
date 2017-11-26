import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-widget-weather',
  templateUrl: './widget-weather.component.html'
})
export class WidgetWeatherComponent {
  @Input()
  public set weather(value: Weather) {
    this.placeWeather = value;
  }

  public placeWeather: Weather;
}
