import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'course-widget-social',
  templateUrl: './widget-social.component.html'
})
export class WidgetSocialComponent implements OnInit {
  public social: SocialInfo;
  public photo: string;

  public constructor(private widgetService: WidgetService) {}

  public ngOnInit(): void {
    this.widgetService.place$
      .subscribe((place: Place) => {
        this.social = place.social;
        this.photo = place.photos[1].img;
      });
  }
}
