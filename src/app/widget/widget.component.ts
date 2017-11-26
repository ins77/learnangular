import { Component, OnInit } from '@angular/core';
import { WidgetService } from './widget.service';

@Component({
  selector: 'course-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  public places: Place[];

  public constructor(private widgetService: WidgetService) {}

  public ngOnInit(): void {
    this.widgetService.getPlaces()
      .subscribe((places: Place[]) => {
        this.places = places;
      });
  }
}
