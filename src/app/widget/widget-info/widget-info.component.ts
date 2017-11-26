import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-widget-info',
  templateUrl: './widget-info.component.html'
})
export class WidgetInfoComponent {
  @Input()
  public set social(value: SocialInfo) {
    this.placeSocial = value;
  }
  @Input()
  public set photo(value: string) {
    this.placePhoto = value;
  }

  public placeSocial: SocialInfo;
  public placePhoto: string;
}
