import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-widget-info',
  templateUrl: './widget-info.component.html'
})
export class WidgetInfoComponent {
  @Input()
  public social: SocialInfo;
}
