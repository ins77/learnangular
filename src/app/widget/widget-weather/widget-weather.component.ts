import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'course-widget-weather',
  templateUrl: './widget-weather.component.html'
})
export class WidgetWeatherComponent implements OnInit {
  public weather: Weather;

  public constructor(private widgetService: WidgetService) {}

  public ngOnInit(): void {
    this.widgetService.place$
      .subscribe((place: Place) => {
        this.weather = place.weather;
      });
  }
}
