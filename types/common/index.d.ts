type Env = {
  production: boolean
};

type Place = {
  type: string,
  address: string,
  phone: number,
  photos: Photo[],
  weather: Weather,
  social: SocialInfo
};

type Photo = {
  img: string
};

type Weather = {
  title: string,
  icon: string,
  water: number,
  temperature: number
};

type SocialInfo = {
  title: string,
  followers: number,
  following: number
};

type PlaceType = {
  title: string
};
