import { Directive, Input, OnInit } from '@angular/core';
import { WidgetService } from '../../widget/widget.service';

@Directive({
  selector: '[widgetInit]'
})
export class InitDirective implements OnInit {
  @Input()
  public place: Place;

  @Input()
  public first: boolean;

  public constructor(private widgetService: WidgetService) {}

  public ngOnInit(): void {
    this.first
      ? this.widgetService.place$.next(this.place)
      : null;
  }

}
