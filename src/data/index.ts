import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const places: Place[] = [
  {
    place_type: 'Hotel',
    place_info: {
      img: 'assets/images/1.jpg',
      contacts: [
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
      ]
    },
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 5,
      temperature: -5
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 10,
      following: 10
    }
  },
  {
    place_type: 'Fishing',
    place_info: {
      img: 'assets/images/2.jpg',
      contacts: [
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
      ]
    },
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 25,
      temperature: 90
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 20,
      following: 20
    }
  },
  {
    place_type: 'Tours',
    place_info: {
      img: 'assets/images/4.jpg',
      contacts: [
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
      ]
    },
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 320,
      temperature: 442
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 30,
      following: 30
    }
  },
  {
    place_type: 'Health',
    place_info: {
      img: 'assets/images/3.jpg',
      contacts: [
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
      ]
    },
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 20,
      temperature: 14
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 40,
      following: 40
    }
  }
];

const placeTypes: PlaceType[] = [
  {
    title: 'Hotel'
  },
  {
    title: 'Fishing'
  },
  {
    title: 'Tours'
  },
  {
    title: 'Health'
  }
];

export const places$: Observable<Place[]> =
  Observable.of(places);

export const placeTypes$: Observable<PlaceType[]> =
  Observable.of(placeTypes);
