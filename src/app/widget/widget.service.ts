import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { places, placeTypes } from '../../data/index';

@Injectable()
export class WidgetService {
  public place$: Subject<Place> = new Subject<Place>();

  public getPlaces(): Observable<Place[]> {
    return Observable.of(places).delay(1000);
  }

  public getPlaceTypes(): Observable<PlaceType[]> {
    return Observable.of(placeTypes).delay(1000);
  }
}
