import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { places, placeTypes } from '../../data/index';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WidgetService {
  public place$: BehaviorSubject<Place> = new BehaviorSubject<Place>(places[0]);

  public getPlaces(): Observable<Place[]> {
    return Observable.of(places).delay(1000);
  }

  public getPlaceTypes(): Observable<PlaceType[]> {
    return Observable.of(placeTypes).delay(1000);
  }
}
