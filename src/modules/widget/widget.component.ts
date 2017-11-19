import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { places$ } from '../../data';

@Component({
  selector: 'course-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  public places$: Observable<Place[]>;

  public ngOnInit(): void {
    this.places$ = places$;
  }
}
