import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const places: Place[] = [
  {
    type: 'Hotel',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/1.jpg'
      },
      {
        img: 'assets/images/1-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 5,
      temperature: -5
    },
    social: {
      title: 'Nam libero voluptatem',
      followers: 10,
      following: 10
    }
  },
  {
    type: 'Hotel',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/2.jpg'
      },
      {
        img: 'assets/images/2-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 15,
      temperature: -15
    },
    social: {
      title: 'Nam libero voluptatem',
      followers: 101,
      following: 101
    }
  },
  {
    type: 'Fishing',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/2.jpg'
      },
      {
        img: 'assets/images/2-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 25,
      temperature: 90
    },
    social: {
      title: 'Nam libero voluptatem',
      followers: 20,
      following: 20
    }
  },
  {
    type: 'Fishing',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/3.jpg'
      },
      {
        img: 'assets/images/3-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 250,
      temperature: 900
    },
    social: {
      title: 'Nam libero voluptatem',
      followers: 200,
      following: 200
    }
  },
  {
    type: 'Tours',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/4.jpg'
      },
      {
        img: 'assets/images/4-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 30,
      temperature: 42
    },
    social: {
      title: 'Nam libero voluptatem',
      followers: 304,
      following: 304
    }
  },
  {
    type: 'Tours',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/1.jpg'
      },
      {
        img: 'assets/images/1-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 320,
      temperature: 442
    },
    social: {
      title: 'Nam libero voluptatem',
      followers: 30,
      following: 30
    }
  },
  {
    type: 'Tours',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/3.jpg'
      },
      {
        img: 'assets/images/3-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 32,
      temperature: 44
    },
    social: {
      title: 'Nam libero voluptatem',
      followers: 3,
      following: 3
    }
  },
  {
    type: 'Health',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/3.jpg'
      },
      {
        img: 'assets/images/3-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 440,
      temperature: 41
    },
    social: {
      title: 'Nam libero voluptatem',
      followers: 40,
      following: 40
    }
  },
  {
    type: 'Health',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/1.jpg'
      },
      {
        img: 'assets/images/1-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 2012,
      temperature: 1412
    },
    social: {
      title: 'Nam libero voluptatem',
      followers: 40,
      following: 40
    }
  },
  {
    type: 'Health',
    address: 'Sed perspiciatis Et harum quidem',
    phone: 1285968685,
    photos: [
      {
        img: 'assets/images/4.jpg'
      },
      {
        img: 'assets/images/4-2.jpg'
      }
    ],
    weather: {
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png',
      water: 20,
      temperature: 14
    },
    social: {
      title: 'Nam libero voluptatem',
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
