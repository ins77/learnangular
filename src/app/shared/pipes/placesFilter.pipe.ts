import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

  public transform(places: Place[], type?: string): Place[] {
    if (!type) {
      return places;
    }

    const filteredPlaces: Place[] = places.filter((place: Place) => {
      return place.type === type;
    });

    return filteredPlaces;
  }

}
